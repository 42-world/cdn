import*as e from"react";var l={heading1:"text-4xl",heading2:"text-2xl",heading3:"text-lg",body1:"text-base",body2:"text-sm",small:"text-xs"},n={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},g={left:"text-left",right:"text-right",center:"text-center"},_={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function d({text:t,size:r="body1",weight:i="regular",align:o="left",color:x="primary"}){return e.createElement("p",{className:`font-display
        ${l[r]}
        ${n[i]}
        ${g[o]}
        ${_[x]}
        `},t)}export{d as Text,g as textAlignConfig,_ as textColorConfig,l as textSizeConfig,n as textWeightConfig};
