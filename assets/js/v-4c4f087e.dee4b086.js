"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2878],{74016:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-4c4f087e",path:"/devices/ZM-35H-Q.html",title:"TuYa ZM-35H-Q control via MQTT",lang:"en-US",frontmatter:{title:"TuYa ZM-35H-Q control via MQTT",description:"Integrate your TuYa ZM-35H-Q via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2022-01-31T17:02:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Reading and Setting Values",slug:"reading-and-setting-values",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Sensitivity (enum)",slug:"sensitivity-enum",children:[]},{level:3,title:"Keep_time (enum)",slug:"keep-time-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZM-35H-Q.md",git:{updatedTime:1644596628e3}}},83e3:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="tuya-zm-35h-q" tabindex="-1"><a class="header-anchor" href="#tuya-zm-35h-q" aria-hidden="true">#</a> TuYa ZM-35H-Q</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZM-35H-Q</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Motion Sensor</td></tr><tr><td>Exposes</td><td>occupancy, battery_low, tamper, battery, sensitivity, keep_time, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZM-35H-Q.jpg" alt="TuYa ZM-35H-Q"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 10 seconds. The led will turn on, then start blinking while the pairing process is in progress.</p><h3 id="reading-and-setting-values" tabindex="-1"><a class="header-anchor" href="#reading-and-setting-values" aria-hidden="true">#</a> Reading and Setting Values</h3><p>As a low power device, the motion sensor isn&#39;t reachable most of the time, but only when active (e.g. because it detected motion). Therefore, requests to read or set values (i.e. <code>sensitivity</code> or <code>keep_time</code>) won&#39;t be processed right away, typically. Instead, they will be queued and sent on the next occasion.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>PIR sensor sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum" aria-hidden="true">#</a> Keep_time (enum)</h3><p>PIR keep time in seconds. Value can be found in the published state on the <code>keep_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keep_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>30</code>, <code>60</code>, <code>120</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);