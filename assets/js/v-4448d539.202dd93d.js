"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50713],{47760:(t,e,i)=>{i.r(e),i.d(e,{data:()=>o});const o={key:"v-4448d539",path:"/devices/ZB-SW02.html",title:"eWeLink ZB-SW02 control via MQTT",lang:"en-US",frontmatter:{title:"eWeLink ZB-SW02 control via MQTT",description:"Integrate your eWeLink ZB-SW02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZB-SW02.md",git:{updatedTime:1644596628e3}}},60100:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});const o=(0,i(66252).uE)('<h1 id="ewelink-zb-sw02" tabindex="-1"><a class="header-anchor" href="#ewelink-zb-sw02" aria-hidden="true">#</a> eWeLink ZB-SW02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZB-SW02</td></tr><tr><td>Vendor</td><td>eWeLink</td></tr><tr><td>Description</td><td>Smart light switch - 2 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZB-SW02.jpg" alt="eWeLink ZB-SW02"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},a=(0,i(83744).Z)(d,[["render",function(t,e){return o}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,o]of e)t[i]=o;return t}}}]);