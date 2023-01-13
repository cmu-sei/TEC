// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import { shallowMount } from '@vue/test-utils'
import Component from "./Paginator.vue";

describe("Paginator.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot with no props assigned", () => {
    const propsData = {};
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with totalPages prop assigned", () => {
    const propsData = {
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with currentPage and totalPages prop assigned", () => {
    const propsData = {
      currentPage: 3,
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with loading and totalPages prop assigned", () => {
    const propsData = {
      loading: true,
      totalPages: 10,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with threshold and totalPages prop assigned", () => {
    const propsData = {
      threshold: 10,
      totalPages: 100,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with currentPage, threshold, loading, and totalPages prop assigned", () => {
    const propsData = {
      currentPage: 20,
      threshold: 10,
      loading: true,
      totalPages: 100,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot when threshold is >= totalPages prop", () => {
    const propsData = {
      threshold: 10,
      totalPages: 3,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot when currentPage > totalPages - threshold + 1", () => {
    const propsData = {
      currentPage: 12,
      threshold: 5,
      totalPages: 15,
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("fires the goToPage method when a button is clicked", () => {
    const spy = jest.spyOn(Component.methods, "goToPage");
    const propsData = {
      currentPage: 4,
      totalPages: 15,
    };
    const wrapper = shallowMount(Component, { propsData });
    wrapper.find("button").trigger("click");
    expect(spy).toHaveBeenCalled();
    expect(wrapper.emitted("go-to-page")).toBeTruthy();
  });
});
