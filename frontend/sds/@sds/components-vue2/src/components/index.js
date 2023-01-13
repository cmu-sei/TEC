// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003


import Vue from "vue";

import SdsAutosuggest from "./Autosuggest/Autosuggest.vue";
import SdsAvatar from "./Avatar/Avatar.vue";
import SdsBadge from "./Badge/Badge.vue";
import SdsButton from "./Button/Button.vue";
import SdsCalendar from "./Calendar/Calendar.vue";
import SdsCheckboxGroup from "./CheckboxGroup/CheckboxGroup.vue";
import SdsDatapoint from "./Datapoint/Datapoint.vue";
import SdsDatepicker from "./Datepicker/Datepicker.vue";
import SdsDropdown from "./Dropdown/Dropdown.vue";
import SdsDropdownDivider from "./DropdownDivider/DropdownDivider.vue";
import SdsDropdownHeader from "./DropdownHeader/DropdownHeader.vue";
import SdsDropdownItem from "./DropdownItem/DropdownItem.vue";
import SdsFileUploader from "./FileUploader/FileUploader.vue";
import SdsFilterByDropdown from "./FilterByDropdown/FilterByDropdown.vue";
import SdsFloatingUi from "./FloatingUi/FloatingUi.vue";
import SdsInput from "./Input/Input.vue"
import SdsLayoutApp from "./LayoutApp/LayoutApp.vue";
import SdsLayoutSeiExternal from "./LayoutSeiExternal/LayoutSeiExternal.vue";
import SdsLayoutSeiExternalFooter from "./LayoutSeiExternalFooter/LayoutSeiExternalFooter.vue";
import SdsLayoutSeiExternalHeader from "./LayoutSeiExternalHeader/LayoutSeiExternalHeader.vue";
import SdsLayoutSeiExternalHeaderContent from "./LayoutSeiExternalHeaderContent/LayoutSeiExternalHeaderContent.vue";
import SdsLayoutSeiExternalMasthead from "./LayoutSeiExternalMasthead/LayoutSeiExternalMasthead.vue";
import SdsLayoutSeiExternalNav from "./LayoutSeiExternalNav/LayoutSeiExternalNav.vue";
import SdsLayoutSeiExternalWordmark from "./LayoutSeiExternalWordmark/LayoutSeiExternalWordmark.vue";
import SdsLayoutStacked from "./LayoutStacked/LayoutStacked.vue";
import SdsLink from "./Link/Link.vue";
import SdsLoadingBox from "./LoadingBox/LoadingBox.vue";
import SdsLoadingSpinner from "./LoadingSpinner/LoadingSpinner.vue";
import SdsModal from "./Modal/Modal.vue";
import SdsMultiselect from "./Multiselect/Multiselect.vue";
import SdsPaginator from "./Paginator/Paginator.vue";
import SdsPopover from "./Popover/Popover.vue";
import SdsRadioGroup from "./RadioGroup/RadioGroup.vue";
import SdsScrollArea from "./ScrollArea/ScrollArea.vue";
import SdsScrollspy from "./Scrollspy/Scrollspy.vue";
import SdsSearchBox from "./SearchBox/SearchBox.vue";
import SdsSection from "./Section/Section.vue";
import SdsSelect from "./Select/Select.vue";
import SdsTabs from "./Tabs/Tabs.vue";
import SdsTable from "./Table/Table.vue";
import SdsTextarea from "./Textarea/Textarea.vue";
import SdsToast from "./Toast/Toast.vue";
import SdsToaster from "./Toaster/Toaster.vue";
import SdsToggleSwitch from "./ToggleSwitch/ToggleSwitch.vue";
import SdsTooltip from "./Tooltip/Tooltip.vue";
import SdsTopFiveChart from "./TopFiveChart/TopFiveChart.vue";

const Components = {
  SdsAutosuggest,
  SdsAvatar,
  SdsBadge,
  SdsButton,
  SdsCalendar,
  SdsCheckboxGroup,
  SdsDatapoint,
  SdsDatepicker,
  SdsDropdown,
  SdsDropdownDivider,
  SdsDropdownHeader,
  SdsDropdownItem,
  SdsFileUploader,
  SdsFilterByDropdown,
  SdsFloatingUi,
  SdsInput,
  SdsLayoutApp,
  SdsLayoutSeiExternal,
  SdsLayoutSeiExternalFooter,
  SdsLayoutSeiExternalHeader,
  SdsLayoutSeiExternalHeaderContent,
  SdsLayoutSeiExternalMasthead,
  SdsLayoutSeiExternalNav,
  SdsLayoutSeiExternalWordmark,
  SdsLayoutStacked,
  SdsLink,
  SdsLoadingBox,
  SdsLoadingSpinner,
  SdsModal,
  SdsMultiselect,
  SdsPaginator,
  SdsPopover,
  SdsRadioGroup,
  SdsScrollArea,
  SdsScrollspy,
  SdsSearchBox,
  SdsSection,
  SdsSelect,
  SdsTabs,
  SdsTable,
  SdsTextarea,
  SdsToast,
  SdsToaster,
  SdsToggleSwitch,
  SdsTooltip,
  SdsTopFiveChart,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
