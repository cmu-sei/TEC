<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-003
-->
 
 
<template>
  <nav>
    <a
      v-for="i in items"
      :key="i.id"
      :href="`#${i.id}`"
      data-id="sds-scrollspy"
      :class="{
        [itemClass]: true,
        [activeClass]: activeId === i.id,
        [inactiveClass]: activeId !== i.id
      }"
      @click="parent ? scrollToIdTarget(i.id, $event) : undefined"
    >
      <!-- @slot Default content. Determines the content of the item link. @binding item -->
      <slot :item="i">{{ i.text }}</slot>
    </a>
  </nav>
</template>

<script>
import { throttleAndDebounce } from '../../helpers/throttleAndDebounce'

// magic number to avoid repeated retrieval
const PAGE_OFFSET = 56

export default {
  name: 'SdsScrollspy',
  props: {
    /**
     * Determines the items list that is observed when the page scrolls.
     * 
     * This accepts an array of objects.
     * 
     * Example object:
     * 
     * `{ id: string, text: string }`
     * 
     * The object's `id` property should be a unique id for an HTML element. For example,
     * if you want the item to observe `<div id="test">`, the `id` would
     * be `test`.
     * 
     * The object's `text` property should be the content of the link that is observing
     * the page.
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * The HTML selector of the container for the element being spied upon.
     */
    parent: { type: String, default: undefined },
    /**
     * Determines the CSS class list for each item.
     */
    itemClass: { type: String, default: '' },
    /**
     * Determines the CSS class list for the active item.
     */
    activeClass: { type: String, default: '' },
    /**
     * Determines the CSS class list for the inactive items.
     */
    inactiveClass: { type: String, default: '' }
  },
  data () {
    return {
      activeId: null,
      lastActiveId: null
    }
  },
  computed: {
    parentEl () {
      if (typeof document === 'undefined') return null
      return this.parent ? document.querySelector(this.parent) : null
    }
  },
  mounted () {
    requestAnimationFrame(this.setActiveItem)
    this.onScroll = throttleAndDebounce(this.setActiveItem, 100)
    if (this.parentEl) {
      this.parentEl.addEventListener('scroll', this.onScroll)
    } else {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  destroyed () {
    if (this.parentEl) {
      this.parentEl.removeEventListener('scroll', this.onScroll)
    } else {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    getAnchorTop (item) {
      const anchor = document.getElementById(item.id)
      return anchor ? anchor.getBoundingClientRect().top  - PAGE_OFFSET - 15 : 0
    },
    isItemActive (index, item, nextItem) {
      const scrollTop = this.parentEl && this.parentEl.getBoundingClientRect().top || window.scrollY

      if (index === 0 && scrollTop === 0) {
        return [true, null]
      }

      if (scrollTop < this.getAnchorTop(item)) {
        return [false, null]
      }

      if (!nextItem || scrollTop < this.getAnchorTop(nextItem)) {
        return [true, item.id]
      }

      return [false, null]
    },
    isInViewport (item) {
      const anchor = document.getElementById(item.id)
      const rect = anchor.getBoundingClientRect();
      if (this.parentEl) {
        const parentRect = this.parentEl.getBoundingClientRect()
        return (
          rect.top >= parentRect.top &&
          rect.bottom <= parentRect.bottom
        )
      } else {
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
      }
    },
    setActiveItem () {
      const itemsInViewport = []
      this.lastActiveId = this.activeId

      this.items.forEach(item => {
        if (this.isInViewport(item)) {
          itemsInViewport.push(item)
        }
      })

      if (itemsInViewport.length) {
        this.activeId = itemsInViewport[0].id
        return
      }

      if (this.lastActiveId) {
        this.activeId = this.lastActiveId
        return
      }

      if (this.items.length && !this.activeId) {
        for (let i = 0; i < this.items.length; i++) {
          const anchor = this.items[i]
          const nextAnchor = this.items[i + 1]

          const [isActive, id] = this.isItemActive(i, anchor, nextAnchor)

          if (isActive) {
            this.activeId = id
          }
        }
        return
      }
    },
    scrollToIdTarget (id, event) {
      if (!this.parentEl) return
      const el = document.getElementById(id)
      if (!el) return
      event.preventDefault();
      this.parentEl.scrollTop = el.offsetTop - this.parentEl.offsetTop
    }
  }
}
</script>
