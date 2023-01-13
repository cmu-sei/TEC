// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import { shallowMount } from '@vue/test-utils'
import Component from "./TopFiveChart.vue";

describe("TopFiveChart.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", () => {
    const propsData = {};
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with urls", () => {
    const propsData = {
      title: "Top Five Chart (with urls, view all url, showPercent)",
      viewAllUrl: "https://seinet.sei.cmu.edu",
      entries: [
        {
          id: 1,
          title: "Test 1",
          count: 40,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 2,
          title: "Test 2",
          count: 30,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 3,
          title: "Test 3",
          count: 15,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 4,
          title: "Test 4",
          count: 10,
          url: "https://seinet.sei.cmu.edu",
        },
        { id: 5, title: "Test 5", count: 3, url: "https://seinet.sei.cmu.edu" },
        { id: 6, title: "Test 6", count: 2, url: "https://seinet.sei.cmu.edu" },
      ],
      showPercent: true,
      progressColor: "cyan",
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with urls, doNotLinkEntries", () => {
    const propsData = {
      title: "Top Five Chart (with urls, doNotLinkEntries)",
      entries: [
        {
          id: 1,
          title: "Test 1",
          count: 40,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 2,
          title: "Test 2",
          count: 30,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 3,
          title: "Test 3",
          count: 15,
          url: "https://seinet.sei.cmu.edu",
        },
        {
          id: 4,
          title: "Test 4",
          count: 10,
          url: "https://seinet.sei.cmu.edu",
        },
        { id: 5, title: "Test 5", count: 3, url: "https://seinet.sei.cmu.edu" },
        { id: 6, title: "Test 6", count: 2, url: "https://seinet.sei.cmu.edu" },
      ],
      doNotLinkEntries: true,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with no urls", () => {
    const propsData = {
      title: "Top Five Chart (no urls)",
      entries: [
        { id: 1, title: "Test 1", count: 40 },
        { id: 2, title: "Test 2", count: 30 },
      ],
      progressColor: "orange",
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with no data", () => {
    const propsData = {
      title: "Top Five Chart (no data)",
      entries: [],
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with malformed data", () => {
    const propsData = {
      title: "Top Five Chart (malformed data)",
      entries: [
        { id: 1, title: "Test 1", count: 40 },
        { id: 2, title: "Test 2" },
      ],
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
