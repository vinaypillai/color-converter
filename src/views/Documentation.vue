<template>
    <main class="main-content">
        <ac-grid>
            <ac-col col="2" :class="['sidebar-wrapper',(navToggle) ? 'hide' : '']" v-if="!navToggle">
                <keep-alive :exclude="['ac-nav']">
                    <aside>
                        <nav class="side-nav">
                            <ul>
                                <li>
                                    <a @click="scrollTo('#installation')">Installation</a>
                                    <ul>
                                        <li><a @click="scrollTo('#node-js')">Node.js</a></li>
                                        <li><a @click="scrollTo('#browser')">Browser</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a @click="scrollTo('#making-a-color-object')">Making a Color object</a>
                                    <ul>
                                        <li><a @click="scrollTo('#color')">color</a></li>
                                        <li><a @click="scrollTo('#type')">type</a></li>
                                        <li><a @click="scrollTo('#precision')">precision</a></li>
                                        <li><a @click="scrollTo('#capitalize')">capitalize</a></li>
                                        <li><a @click="scrollTo('#color-object-reactivity')">Color object reactivity</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a @click="scrollTo('#color-class-api')">Color class API</a>
                                    <ul>
                                        <li>
                                            <a @click="scrollTo('#properties')">Object properties</a>
                                            <ul>
                                                <li><a @click="scrollTo('#rgb')">rgb</a></li>
                                                <li><a @click="scrollTo('#rgbString')">rgbString</a></li>
                                                <li><a @click="scrollTo('#hex')">hex</a></li>
                                                <li><a @click="scrollTo('#hexString')">hexString</a></li>
                                                <li><a @click="scrollTo('#hsl')">hsl</a></li>
                                                <li><a @click="scrollTo('#hslString')">hslString</a></li>
                                                <li><a @click="scrollTo('#xyz')">xyz</a></li>
                                                <li><a @click="scrollTo('#xyzString')">xyzString</a></li>
                                                <li><a @click="scrollTo('#lab')">lab</a></li>
                                                <li><a @click="scrollTo('#labString')">labString</a></li>
                                                <li><a @click="scrollTo('#lchab')">lchab</a></li>
                                                <li><a @click="scrollTo('#lchabString')">lchabString</a></li>
                                                <li><a @click="scrollTo('#luv')">luv</a></li>
                                                <li><a @click="scrollTo('#luvString')">luvString</a></li>
                                                <li><a @click="scrollTo('#lchuv')">lchuv</a></li>
                                                <li><a @click="scrollTo('#lchuvString')">lchuvString</a></li>
                                                <li><a @click="scrollTo('#precision-1')">precision</a></li>
                                                <li><a @click="scrollTo('#capitalize-1')">capitalize</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a @click="scrollTo('#static-methods')">Static methods</a>
                                            <ul>
                                                <li><a @click="scrollTo('#color-rgbtohsl')">Color.rgbToHsl</a></li>
                                                <li><a @click="scrollTo('#color-hsltorgb')">Color.hslToRgb</a></li>
                                                <li><a @click="scrollTo('#color-rgbtohex')">Color.rgbToHex</a></li>
                                                <li><a @click="scrollTo('#color-hextorgb')">Color.hexToRgb</a></li>
                                                <li><a @click="scrollTo('#color-rgbtoxyz')">Color.rgbToXyz</a></li>
                                                <li><a @click="scrollTo('#color-xyztorgb')">Color.xyzToRgb</a></li>
                                                <li><a @click="scrollTo('#color-xyztolab')">Color.xyzToLab</a></li>
                                                <li><a @click="scrollTo('#color-labtoxyz')">Color.labToXyz</a></li>
                                                <li><a @click="scrollTo('#color-labtolchab')">Color.labToLCHab</a></li>
                                                <li><a @click="scrollTo('#color-lchabtolab')">Color.lchABToLab</a></li>
                                                <li><a @click="scrollTo('#color-xyztoluv')">Color.xyzToLuv</a></li>
                                                <li><a @click="scrollTo('#color-luvtoxyz')">Color.luvToXyz</a></li>
                                                <li><a @click="scrollTo('#color-luvtolchuv')">Color.luvToLCHuv</a></li>
                                                <li><a @click="scrollTo('#color-lchuvtoluv')">Color.lchUVToLuv</a></li>
                                                <li><a @click="scrollTo('#color-luminance')">Color.luminance</a></li>
                                                <li><a @click="scrollTo('#color-random')">Color.random</a></li>
                                                <li><a @click="scrollTo('#color-randomfromstring')">Color.randomFromString</a></li>
                                                <li><a @click="scrollTo('#color-randomoftype')">Color.randomOfType</a></li>
                                                <li><a @click="scrollTo('#color-randomoftypeformatted')">Color.randomOfTypeFormatted</a></li>
                                                <li><a @click="scrollTo('#color-contrasttextcolor')">Color.contrastTextColor</a></li>
                                                <li><a @click="scrollTo('#color-contrastratio')">Color.contrastRatio</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a @click="scrollTo('#acknowledgements')">Acknowledgements</a></li>
                                <li><a @click="scrollTo('#license')">License</a></li>
                            </ul>
                        </nav>
                    </aside>
                </keep-alive>
            </ac-col>
            <ac-col xl-cols="10" cols="12" class="doc-wrapper">
                <h1 id="ac-colors">ac-colors</h1>
                <p><a href="https://www.npmjs.com/package/ac-colors"><img src="https://nodei.co/npm/ac-colors.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM"></a></p>
                <p><img src="https://img.shields.io/github/v/release/vinaypillai/ac-colors" alt="package release version badge"> <img src="https://img.shields.io/bundlephobia/min/ac-colors" alt="minified size badge"> <img src="https://img.shields.io/travis/com/vinaypillai/ac-colors" alt="travis ci status badge"> <img src="https://coveralls.io/repos/github/vinaypillai/ac-colors/badge.svg?branch=master" alt="Coveralls coverage badge"> <img src="https://img.shields.io/librariesio/release/npm/ac-colors" alt="dependency status badge"> <img src="https://img.shields.io/npm/l/ac-colors" alt="mit license badge"></p>
                <p>ac-colors is a reactive JavaScript color library that can freely convert between sRGB, HSL, HEX, XYZ, LAB, LCHab, LUV, and LCHuv, as well as handle random color generation and contrast ratio calculation. A live color picker running on ac-colors can be found at <a href="http://colors.acutecomponents.com/">http://colors.acutecomponents.com/</a>.</p>

                
                <h2 id="installation">Installation</h2>
                <h3 id="node-js">Node.js</h3>
                <pre><code class="lang-bash">npm <span class="hljs-keyword">install</span> <span class="hljs-comment">--save ac-colors</span></code></pre>
                <h3 id="browser">Browser</h3>
                <h4 id="download">Download</h4>
                <p>Download the minified transpiled <a href="https://raw.githubusercontent.com/vinaypillai/ac-colors/master/dist/ac-colors.min.js">ac-colors.min.js</a> and include it in a <pre><code>&lt;script&gt;</code></pre> tag</p>
                <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"ac-colors.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                <h4 id="cdn">CDN</h4>
                <p>Alternatively add this <pre><code>&lt;script&gt;</code></pre> tag to your body to load the minified version from a CDN.</p>
                <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/ac-colors@1/dist/ac-colors.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                <h2 id="making-a-color-object">Making a Color object</h2>
                <p>The easiest way to get started with color conversion in ac-colors is by creating a Color object. The constructor takes  an object with up to four deconstructed properties which help determine how to convert and format color output:</p>
                <ul>
                    <li><pre><code>color</code></pre>: An array (or string if <pre><code>type</code></pre> is hex) containing the three numbers for the color (ex. [r,g,b]). Defaults to <pre><code>[0,0,0]</code></pre>.</li>
                    <li><pre><code>type</code></pre>: The format for the color being inputted. A full list of types can be found <a href="#type">below</a>. Defaults to <pre><code>&quot;rgb&quot;</code></pre>.</li>
                    <li><pre><code>precision</code></pre>: The number of decimals to be outputted from the string output methods. Defaults to <pre><code>3</code></pre>.</li>
                    <li><pre><code>capitalize</code></pre>: A boolean flag for whether or not to capitalize the string output. Defaults to <pre><code>true</code></pre>.</li>
                </ul>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Node.js users will need to import the module</span>
                <span class="hljs-keyword">const</span> Color = <span class="hljs-built_in">require</span>(<span class="hljs-string">"ac-colors"</span>);
                <span class="hljs-keyword">let</span> black = <span class="hljs-keyword">new</span> Color();
                <span class="hljs-built_in">console</span>.log(black.hex); <span class="hljs-comment">// #000000</span></code></pre>
                <h3 id="color"><pre><code>color</code></pre></h3>
                <p>The <pre><code>color</code></pre> property is usually a three element array containing the three RGB, HSL, LAB, XYZ, LUV, LCHuv, or LCHab digits, but can also be a string containing a 3 or 6 digit hexcode. The default color, <pre><code>[0,0,0,]</code></pre> evaluates to black when used with the default type of <pre><code>&quot;rgb&quot;</code></pre>.</p>
                <pre><code class="lang-javascript">let <span class="hljs-built_in">red</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]});
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">red</span>.rgbString); <span class="hljs-comment">// RGB(255, 0, 0)</span></code></pre>
                <p>Hex colors can be specified with 3 or six digits and with or without the leading &#39;#&#39;.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> grey = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:<span class="hljs-string">"#333"</span>,<span class="hljs-string">"type"</span>:<span class="hljs-string">"hex"</span>});
                console.<span class="hljs-built_in">log</span>(grey.hsl); <span class="hljs-comment">// [0, 0, 20]</span></code></pre>
                <h3 id="type"><pre><code>type</code></pre></h3>
                <p>The <pre><code>type</code></pre> property is a string with the following possible values:</p>
                <ul>
                    <li><pre><code>&quot;rgb&quot;</code></pre> (Default)</li>
                    <li><pre><code>&quot;hex&quot;</code></pre></li>
                    <li><pre><code>&quot;hsl&quot;</code></pre></li>
                    <li><pre><code>&quot;xyz&quot;</code></pre></li>
                    <li><pre><code>&quot;lab&quot;</code></pre></li>
                    <li><pre><code>&quot;lchab&quot;</code></pre></li>
                    <li><pre><code>&quot;luv&quot;</code></pre></li>
                    <li><pre><code>&quot;lchuv&quot;</code></pre></li>
                </ul>
                <p>The type merely specifies the format of the incoming color. Once the type is specified, all of the below <a href="#color-object-properties">properties</a> will be set.</p>
                <pre><code class="lang-javascript">let <span class="hljs-built_in">blue</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:<span class="hljs-string">"#0000FF"</span>,<span class="hljs-string">"type"</span>:<span class="hljs-string">"hex"</span>});
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">blue</span>.rgb); <span class="hljs-comment">// [0,0,255]</span></code></pre>
                <h3 id="precision"><pre><code>precision</code></pre></h3>
                <p>The <pre><code>precision</code></pre> property specifies how many decimal places to return in the string format of the color in representations where decimals are allowed, and defaults to 3 places.</p>
                <pre><code class="lang-javascript">let <span class="hljs-built_in">green</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:<span class="hljs-string">"#00FF00"</span>,<span class="hljs-string">"type"</span>:<span class="hljs-string">"hex"</span>, <span class="hljs-string">"precision"</span>:<span class="hljs-number">1</span>});
                <span class="hljs-comment">// The hslString property allows for decimal values</span>
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.hslString); <span class="hljs-comment">// HSL(120.0, 100.0, 50.0)</span>
                <span class="hljs-comment">// The rgbString property does not</span>
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.rgbString); <span class="hljs-comment">// RGB(0, 255, 0)</span></code></pre>
                <h3 id="capitalize"><pre><code>capitalize</code></pre></h3>
                <p>The <pre><code>capitalize</code></pre> property specifies whether or not to capitalize the string of the returned by the output functions.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// capitalize: true</span>
                <span class="hljs-keyword">let</span> yellowCaps = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">53.418</span>,<span class="hljs-number">96.735</span>,<span class="hljs-number">48.039</span>],<span class="hljs-string">"type"</span>:<span class="hljs-string">"hsl"</span>, <span class="hljs-string">"precision"</span>:<span class="hljs-number">1</span>, <span class="hljs-string">"capitalize"</span>:<span class="hljs-literal">true</span>});
                <span class="hljs-comment">// capitalize: false</span>
                <span class="hljs-keyword">let</span> yellowNoCaps = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">53.418</span>,<span class="hljs-number">96.735</span>,<span class="hljs-number">48.039</span>],<span class="hljs-string">"type"</span>:<span class="hljs-string">"hsl"</span>, <span class="hljs-string">"precision"</span>:<span class="hljs-number">1</span>, <span class="hljs-string">"capitalize"</span>:<span class="hljs-literal">false</span>});

                <span class="hljs-built_in">console</span>.log(yellowCaps.hexString); <span class="hljs-comment">// #F1D704</span>
                <span class="hljs-built_in">console</span>.log(yellowNoCaps.hexString); <span class="hljs-comment">// #f1d704</span></code></pre>
                <h3 id="color-object-reactivity">Color object reactivity</h3>
                <p>Each Color object has six <a href="#object-properties">reactive color members</a> and two reactive formatting members, <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre>. This means that setting the value of any of the properties will automatically trigger updates of all the other values, so conversion between all the possible types is done simultaneously.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">const</span> <span class="hljs-built_in">green</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:<span class="hljs-string">"#00FF00"</span>,<span class="hljs-string">"type"</span>:<span class="hljs-string">"hex"</span>});
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.rgbString); <span class="hljs-comment">// RGB(0, 255, 0)</span>
                <span class="hljs-built_in">green</span>.rgb = [<span class="hljs-number">255</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>]
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.hslString); <span class="hljs-comment">// HSL(0.000, 100.000, 50.000)</span>
                <span class="hljs-built_in">green</span>.capitalize = <span class="hljs-keyword">false</span>;
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.hexString); <span class="hljs-comment">// #ff0000</span>
                <span class="hljs-built_in">green</span>.lab = [<span class="hljs-number">32.297</span>, <span class="hljs-number">79.194</span>, <span class="hljs-number">-107.859</span>];
                <span class="hljs-built_in">green</span>.precision = <span class="hljs-number">5</span>;
                console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">green</span>.lchabString); <span class="hljs-comment">// lchAB(32.29701, 133.81132, 306.28752)</span></code></pre>
                <h2 id="color-class-api">Color class API</h2>
                <p>The color object contains two main sets of data members which can be used for color conversion. There are the reactive properties which can be accessed from each Color instance, but there are also static methods which can be used for general color conversion without creating a Color object.</p>
                <h3 id="object-properties">Object properties</h3>
                <p>There are 14 primary instance properties, as well as two formatting properties (<pre><code>precision</code></pre> and <pre><code>capitalize</code></pre>) in each Color object that can be used for color conversion. The 14 main conversion properties can be divided into two categories: Reactive members and their complementary formatted string outputs.
                    <table>
                        <tr> <th>Reactive members</th><th>Formatted string outputs</th></tr>
                        <tr><td>rgb</td><td>rgbString</td></tr>
                        <tr><td>hex</td><td>hexString</td></tr>
                        <tr><td>hsl</td><td>hslString</td></tr>
                        <tr><td>xyz</td><td>xyzString</td></tr>
                        <tr><td>lab</td><td>labString</td></tr>
                        <tr><td>lchab</td><td>lchabString</td></tr>
                        <tr><td>luv</td><td>luvString</td></tr>
                        <tr><td>lchuv</td><td>lchuvString</td></tr>
                    </table>
                </p>
                <h4 id="rgb"><pre><code>rgb</code></pre></h4>
                <p>The <pre><code>rgb</code></pre> property is a reactive getter and setter for the three element array representing the colors [r,g,b] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgb); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">rgb</span> = [255,255,255];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.hex); <span class="hljs-comment">// #ffffff</span></span></code></pre>
                <h4 id="rgbstring"><pre><code>rgbString</code></pre></h4>
                <p>The <pre><code>rgbString</code></pre> property is a formatted string output for the rgb color. It is not impacted by the Color object&#39;s <pre><code>precision</code></pre>, but is affected by its <pre><code>capitalize</code></pre> value.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-keyword">new</span> Color();
                <span class="hljs-built_in">console</span>.log(black.rgbString); <span class="hljs-comment">// RGB(0, 0, 0)</span>
                black.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(black.rgbString); <span class="hljs-comment">// rgb(0, 0, 0)</span></code></pre>
                <h4 id="hex"><pre><code>hex</code></pre></h4>
                <p>The <pre><code>hex</code></pre> property is a reactive getter and setter for the string representing the colors three or six digit hex code.</p>
                <pre><code class="lang-javascript">let black = <span class="hljs-keyword">new</span> Color();
                console.<span class="hljs-built_in">log</span>(black.<span class="hljs-built_in">hex</span>); <span class="hljs-comment">// #000000</span>
                black.<span class="hljs-built_in">hex</span> = <span class="hljs-string">"#FFF"</span>;
                console.<span class="hljs-built_in">log</span>(black.rgbString); <span class="hljs-comment">// RGB(255, 255, 255)</span></code></pre>
                <h4 id="hexstring"><pre><code>hexString</code></pre></h4>
                <p>The <pre><code>hexString</code></pre> property is a formatted string output for the hex color. It is not impacted by the Color object&#39;s <pre><code>precision</code></pre>, but is affected by its <pre><code>capitalize</code></pre> value.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.hexString) <span class="hljs-comment">// #FFFFFF</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.hexString) <span class="hljs-comment">// #ffffff</span></code></pre>
                <h4 id="hsl"><pre><code>hsl</code></pre></h4>
                <p>The <pre><code>hsl</code></pre> property is a reactive getter and setter for the three element array representing the colors [h,s,l] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.hsl); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">hsl</span> = [240,20.863,27.255];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgbString); <span class="hljs-comment">// RGB(55, 55, 84)</span></span></code></pre>
                <h4 id="hslstring"><pre><code>hslString</code></pre></h4>
                <p>The <pre><code>hslString</code></pre> property is a formatted string output for the hsl color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.hslString) <span class="hljs-comment">// HSL(0.000, 0.000, 100.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.hslString) <span class="hljs-comment">// hsl(0.000, 0.000, 100.000)</span></code></pre>
                <h4 id="xyz"><pre><code>xyz</code></pre></h4>
                <p>The <pre><code>xyz</code></pre> property is a reactive getter and setter for the three element array representing the colors [x,y,z] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-keyword">new</span> Color();
                console.<span class="hljs-built_in">log</span>(black.<span class="hljs-built_in">xyz</span>); <span class="hljs-comment">// [0,0,0]</span>
                black.<span class="hljs-built_in">xyz</span> = [<span class="hljs-number">4.542</span>,<span class="hljs-number">4.185</span>,<span class="hljs-number">8.954</span>];
                console.<span class="hljs-built_in">log</span>(black.rgbString); <span class="hljs-comment">// RGB(55, 55, 84)</span></code></pre>
                <h4 id="xyzstring"><pre><code>xyzString</code></pre></h4>
                <p>The <pre><code>xyzString</code></pre> property is a formatted string output for the xyz color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.xyzString) <span class="hljs-comment">// XYZ(95.047, 100.000, 100.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.xyzString) <span class="hljs-comment">// xyz(95.047, 100.000, 100.000)</span></code></pre>
                <h4 id="lab"><pre><code>lab</code></pre></h4>
                <p>The <pre><code>lab</code></pre> property is a reactive getter and setter for the three element array representing the colors [l,a,b] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.lab); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">lab</span> = [24.272,7.853,-17.538];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgbString); <span class="hljs-comment">// RGB(55, 55, 84)</span></span></code></pre>
                <h4 id="labstring"><pre><code>labString</code></pre></h4>
                <p>The <pre><code>labString</code></pre> property is a formatted string output for the lab color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.labString) <span class="hljs-comment">// LAB(100.000, 0.000, 0.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.labString) <span class="hljs-comment">// lab(100.000, 0.000, 0.000)</span></code></pre>
                <h4 id="lchab"><pre><code>lchab</code></pre></h4>
                <p>The <pre><code>lchab</code></pre> property is a reactive getter and setter for the three element array representing the colors [l,c,h] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.lchab); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">lchab</span> = [24.272,7.853,294.121];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgbString); <span class="hljs-comment">// RGB(55, 55, 84)</span></span></code></pre>
                <h4 id="lchabstring"><pre><code>lchabString</code></pre></h4>
                <p>The <pre><code>lchabString</code></pre> property is a formatted string output for the lab color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values. However, the capitalization is inverted for the subscripted &#39;ab&#39;.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.lchabString) <span class="hljs-comment">// LCHab(100.000, 0.000,0.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.lchabString) <span class="hljs-comment">// lchAB(100.000, 0.000,0.000)</span></code></pre>
                <h4 id="luv"><pre><code>luv</code></pre></h4>
                <p>The <pre><code>luv</code></pre> property is a reactive getter and setter for the three element array representing the colors [l,u,v] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.luv); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">luv</span> = [24.272,7.853,-17.538];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgbString); <span class="hljs-comment">// RGB(70, 51, 78)</span></span></code></pre>
                <h4 id="luvstring"><pre><code>luvString</code></pre></h4>
                <p>The <pre><code>luvString</code></pre> property is a formatted string output for the lab color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.luvString) <span class="hljs-comment">// LUV(100.000, 0.000, 0.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.luvString) <span class="hljs-comment">// luv(100.000, 0.000, 0.000)</span></code></pre>
                <h4 id="lchuv"><pre><code>lchuv</code></pre></h4>
                <p>The <pre><code>lchuv</code></pre> property is a reactive getter and setter for the three element array representing the colors [l,c,h] values.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> black = <span class="hljs-function"><span class="hljs-keyword">new</span> <span class="hljs-title">Color</span>();
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.lchuv); <span class="hljs-comment">// [0,0,0]</span>
                <span class="hljs-title">black</span>.<span class="hljs-title">lchuv</span> = [24.272,7.853,294.121];
                <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(black.rgbString); <span class="hljs-comment">// RGB(63, 55, 66)</span></span></code></pre>
                <h4 id="lchuvstring"><pre><code>lchuvString</code></pre></h4>
                <p>The <pre><code>lchuvString</code></pre> property is a formatted string output for the lab color. It is  impacted by the Color object&#39;s <pre><code>precision</code></pre> and <pre><code>capitalize</code></pre> values. However, the capitalization is inverted for the subscripted &#39;uv&#39;.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]});
                <span class="hljs-built_in">console</span>.log(white.lchuvString) <span class="hljs-comment">// LCHuv(100.000, 0.000,0.000)</span>
                white.capitalize = <span class="hljs-literal">false</span>;
                <span class="hljs-built_in">console</span>.log(white.lchuvString) <span class="hljs-comment">// lchUV(100.000, 0.000,0.000)</span></code></pre>
                <h4 id="precision"><pre><code>precision</code></pre></h4>
                <p>The <pre><code>precision</code></pre> property is a reactive formatting property that controls the number of decimal places outputted from a formatted string property. It is set during object initialization, but can be updated at any time.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>],<span class="hljs-string">"precision"</span>:<span class="hljs-number">3</span>});
                console.<span class="hljs-built_in">log</span>(white.lchabString) <span class="hljs-comment">// LCHab(100.000, 0.000,0.000)</span>
                white.precision = <span class="hljs-number">1</span>;
                console.<span class="hljs-built_in">log</span>(white.lchabString) <span class="hljs-comment">// LCHab(100.0, 0.0,0.0))</span></code></pre>
                <h4 id="capitalize"><pre><code>capitalize</code></pre></h4>
                <p>The <pre><code>capitalize</code></pre> property is a reactive formatting property that controls the capitalization of a formatted string property. It is set during object initialization, but can be updated at any time.</p>
                <pre><code class="lang-javascript"><span class="hljs-keyword">let</span> white = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>], <span class="hljs-string">"capitalize"</span>:<span class="hljs-literal">false</span>});
                <span class="hljs-built_in">console</span>.log(white.lchabString) <span class="hljs-comment">// lchAB(100.000, 0.000,0.000)</span>
                white.capitalize = <span class="hljs-literal">true</span>;
                <span class="hljs-built_in">console</span>.log(white.lchabString) <span class="hljs-comment">// LCHab(100.000, 0.000,0.000)</span></code></pre>
                <h3 id="static-methods">Static Methods</h3>
                <p>Although it is easier to handle color conversion by creating Color objects and making use of the automatic type conversion, ac-colors supports manual color conversion using the underlying static methods. In addition, static methods are provided for handling random color generation and color contrast ratio checking.</p>
                <h4 id="color-rgbtohsl"><pre><code>Color.rgbToHsl</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[r,g,b]</code></pre> representing a color&#39;s rgb values, and returns a three element array <pre><code>[h,s,l]</code></pre> representing the color&#39;s hsl values</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.rgbToHex(hex)</span>
                console.log(Color.rgbToHsl([<span class="hljs-number">85</span>,<span class="hljs-number">46</span>,<span class="hljs-number">58</span>])); <span class="hljs-comment">// [341.53846153846155,29.770992366412212,25.68627450980392]</span></code></pre>
                <h4 id="color-hsltorgb"><pre><code>Color.hslToRgb</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[h,s,l]</code></pre> representing a color&#39;s hsl values, and returns a three element array <pre><code>[r,g,b]</code></pre> representing the color&#39;s rgb values</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.hslToRgb(hsl)</span>
                console.log(Color.hslToRgb([<span class="hljs-number">341.538</span>,<span class="hljs-number">29.771</span>,<span class="hljs-number">25.686</span>])); <span class="hljs-comment">// [85,46,58]</span></code></pre>
                <h4 id="color-rgbtohex"><pre><code>Color.rgbToHex</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[r,g,b]</code></pre> representing a color&#39;s rgb values, and returns a string representing the color&#39;s hex code.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.rgbToHex(rgb)</span>
                console.log(Color.rgbToHex([<span class="hljs-number">85</span>,<span class="hljs-number">46</span>,<span class="hljs-number">58</span>])); <span class="hljs-comment">// #552e3a</span></code></pre>
                <h4 id="color-hextorgb"><pre><code>Color.hexToRgb</code></pre></h4>
                <p>This method takes in a three or six digit hexcode and returns a three element array <pre><code>[r,g,b]</code></pre> representing a color&#39;s rgb values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.hexToRgb(hex)</span>
                console.<span class="hljs-built_in">log</span>(Color.hexToRgb(<span class="hljs-string">"#552e3a"</span>)); <span class="hljs-comment">// [85,46,58]</span></code></pre>
                <h4 id="color-rgbtoxyz"><pre><code>Color.rgbToXyz</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[r,g,b]</code></pre> representing a color&#39;s rgb values, and returns a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.rgbToXyz(rgb)</span>
                console.log(Color.rgbToXyz([<span class="hljs-number">85</span>,<span class="hljs-number">46</span>,<span class="hljs-number">58</span>])); <span class="hljs-comment">// [5.487028215922665, 4.19077333446813, 4.522689110429709]</span></code></pre>
                <h4 id="color-xyztorgb"><pre><code>Color.xyzToRgb</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values and returns a three element array <pre><code>[r,g,b]</code></pre> representing a color&#39;s rgb values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.xyzToRgb(xyz)</span>
                console.log(Color.xyzToRgb([<span class="hljs-number">5.487</span>,<span class="hljs-number">4.191</span>,<span class="hljs-number">4.522</span>])); <span class="hljs-comment">// [85,46,58]</span></code></pre>
                <h4 id="color-xyztolab"><pre><code>Color.xyzToLab</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values and returns a three element array <pre><code>[l,a,b]</code></pre> representing a color&#39;s lab values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.xyzToLab(xyz)</span>
                console.log(Color.xyzToLab([<span class="hljs-number">5.487</span>,<span class="hljs-number">4.191</span>,<span class="hljs-number">4.522</span>])); <span class="hljs-comment">// [24.293087120125165, 19.563162207233198, 0.21375272337743612]</span></code></pre>
                <h4 id="color-labtoxyz"><pre><code>Color.labToXyz</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,a,b]</code></pre> representing a color&#39;s lab values. and returns a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.labToXyz(lab)</span>
                console.log(Color.labToXyz([<span class="hljs-number">24.294</span>,<span class="hljs-number">19.570</span>,<span class="hljs-number">0.211</span>])); <span class="hljs-comment">// [5.487917707204406, 4.191284860245909, 4.522847553083241]</span></code></pre>
                <h4 id="color-labtolchab"><pre><code>Color.labToLCHab</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,a,b]</code></pre> representing a color&#39;s lab values. and returns a three element array <pre><code>[l,c,h]</code></pre> representing the color&#39;s LCHab values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.labToLCHab(lab)</span>
                console.log(Color.labToLCHab([<span class="hljs-number">24.294</span>,<span class="hljs-number">19.570</span>,<span class="hljs-number">0.211</span>])); <span class="hljs-comment">// [24.294, 19.57113744778264, 0.617728209288702]</span></code></pre>
                <h4 id="color-lchabtolab"><pre><code>Color.lchABToLab</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,c,h]</code></pre> representing a color&#39;s LCHab values. and returns a three element array <pre><code>[l,a,b]</code></pre> representing the color&#39;s lab values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.lchABToLab(lchAB)</span>
                console.log(Color.lchABToLab([<span class="hljs-number">24.294</span>,<span class="hljs-number">19.571</span>,<span class="hljs-number">0.617</span>])); <span class="hljs-comment">// [24.294, 19.56986524034229, 0.21074979203493507]</span></code></pre>
                <h4 id="color-xyztoluv"><pre><code>Color.xyzToLuv</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values and returns a three element array <pre><code>[l,u,v]</code></pre> representing a color&#39;s luv values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.xyzToLuv(xyz)</span>
                console.log(Color.xyzToLuv([<span class="hljs-number">5.487</span>,<span class="hljs-number">4.191</span>,<span class="hljs-number">4.522</span>])); <span class="hljs-comment">// [24.293087120125165, 22.133854138128648, -2.4869700034790783]</span></code></pre>
                <h4 id="color-luvtoxyz"><pre><code>Color.luvToXyz</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,u,v]</code></pre> representing a color&#39;s luv values. and returns a three element array <pre><code>[x,y,z]</code></pre> representing the color&#39;s xyz values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.luvToXyz(luv)</span>
                console.log(Color.luvToXyz([<span class="hljs-number">24.294</span>,<span class="hljs-number">22.134</span>,<span class="hljs-number">-2.487</span>])); <span class="hljs-comment">//  [5.487326075294226, 4.191284860245909, 4.522311066039963]</span></code></pre>
                <h4 id="color-luvtolchuv"><pre><code>Color.luvToLCHuv</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,u,v]</code></pre> representing a color&#39;s lab values. and returns a three element array <pre><code>[l,c,h]</code></pre> representing the color&#39;s LCHuv values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.luvToLCHuv(luv)</span>
                console.log(Color.luvToLCHuv([<span class="hljs-number">24.294</span>,<span class="hljs-number">22.134</span>,<span class="hljs-number">-2.487</span>])); <span class="hljs-comment">// [24.294, 22.27328276208965, 353.5890738118895]</span></code></pre>
                <h4 id="color-lchuvtoluv"><pre><code>Color.lchUVToLuv</code></pre></h4>
                <p>This method takes in a three element array <pre><code>[l,c,h]</code></pre> representing a color&#39;s LCHuv values. and returns a three element array <pre><code>[l,u,v]</code></pre> representing the color&#39;s luv values.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.lchUVToLuv(lchUV)</span>
                console.log(Color.lchUVToLuv([<span class="hljs-number">24.294</span>,<span class="hljs-number">22.273</span>,<span class="hljs-number">353.589</span>])); <span class="hljs-comment">// [24.294, 22.133715802240754, -2.48699694122008]</span></code></pre>
                <h4 id="color-luminance"><pre><code>Color.luminance</code></pre></h4>
                <p>This method takes in a three element array and a string representing its type and returns its <a href="https://www.w3.org/TR/WCAG20/#relativeluminancedef">relative luminance</a>. Default type is <pre><code>&quot;rgb&quot;</code></pre>.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.luminance(color,type)</span>
                console.log(Color.luminance([<span class="hljs-number">0</span>,<span class="hljs-number">255</span>,<span class="hljs-number">0</span>])); <span class="hljs-comment">// 0.7152</span>
                console.log(Color.luminance(<span class="hljs-string">"#ff0000"</span>,<span class="hljs-string">"hex"</span>)); <span class="hljs-comment">// 0.2126</span></code></pre>
                <h4 id="color-random"><pre><code>Color.random</code></pre></h4>
                <p>This method returns a new Color instance with a random color selected.</p>
                <pre><code class="lang-javascript">// Color.random()
                console.log(Color.random()); // Color {_rgb: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hsl: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hex: <span class="hljs-string">"#b3eeb6"</span>, _xyz: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _lab: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), …}
                console.log(Color.random()); // Color {_rgb: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hsl: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hex: <span class="hljs-string">"#85dd60"</span>, _xyz: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _lab: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), …}</code></pre>
                <h4 id="color-randomfromstring"><pre><code>Color.randomFromString</code></pre></h4>
                <p>This method returns a new Color instance with a deterministic random color derived from the given string. The string is hashed under the PJW-32 hash to achieve pseudorandom distribution of colors.</p>
                <pre><code class="lang-javascript">// Color.randomFromString(str)
                console.log(Color.randomFromString(<span class="hljs-string">"Hello World!"</span>)); // Color {_xyz: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _rgb: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hsl: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hex: <span class="hljs-string">"#712199"</span>, _lab: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), …}
                console.log(Color.randomFromString(<span class="hljs-string">"Hello World!"</span>)); // Color {_xyz: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _rgb: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hsl: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hex: <span class="hljs-string">"#712199"</span>, _lab: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), …}
                console.log(Color.randomFromString(<span class="hljs-string">"Foo Bar"</span>)); // Color {_xyz: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _rgb: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hsl: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), _hex: <span class="hljs-string">"#b20092"</span>, _lab: <span class="hljs-keyword">Array</span>(<span class="hljs-number">3</span>), …}</code></pre>
                <h4 id="color-randomoftype"><pre><code>Color.randomOfType</code></pre></h4>
                <p>This method takes in a type and returns a new three element array of the type selected, or six digit hex code if type is <pre><code>&quot;hex&quot;</code></pre>. Default type is <pre><code>&quot;rgb&quot;</code></pre>.</p>
                <pre><code class="lang-javascript">// Color.<span class="hljs-keyword">random</span>OfType(type)
                console.<span class="hljs-keyword">log</span>(Color.<span class="hljs-keyword">random</span>OfType()); // [<span class="hljs-number">24</span>, <span class="hljs-number">60</span>, <span class="hljs-number">77</span>]
                console.<span class="hljs-keyword">log</span>(Color.<span class="hljs-keyword">random</span>OfType(<span class="hljs-string">"hex"</span>)); // <span class="hljs-comment">#4c4f92</span></code></pre>
                <h4 id="color-randomoftypeformatted"><pre><code>Color.randomOfTypeFormatted</code></pre></h4>
                <p>This method takes in a type, a <pre><code>capitalize</code></pre> flag, and a <pre><code>precision</code></pre> and returns a formatted string for the type specified. The <pre><code>capitalize</code></pre> flag determines whether or not the returned string will capitalized, and defaults to true. The <pre><code>precision</code></pre> flag determines how many decimal places to round the values returned, if applicable, and defaults to 3. Default type is <pre><code>&quot;rgb&quot;</code></pre>.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.randomOfTypeFormatted(type,capitalize,precision)</span>
                console.<span class="hljs-built_in">log</span>(Color.randomOfTypeFormatted()); <span class="hljs-comment">// RGB(237, 216, 88)</span>
                console.<span class="hljs-built_in">log</span>(Color.randomOfTypeFormatted(<span class="hljs-string">"hex"</span>)); <span class="hljs-comment">// #FD3741</span>
                console.<span class="hljs-built_in">log</span>(Color.randomOfTypeFormatted(<span class="hljs-string">"rgb"</span>,<span class="hljs-literal">false</span>)); <span class="hljs-comment">// rgb(120, 156, 72)</span>
                console.<span class="hljs-built_in">log</span>(Color.randomOfTypeFormatted(<span class="hljs-string">"hsl"</span>,<span class="hljs-literal">true</span>,<span class="hljs-number">1</span>)); <span class="hljs-comment">// HSL(296.9, 90.6, 79.2)</span></code></pre>
                <h4 id="color-contrasttextcolor"><pre><code>Color.contrastTextColor</code></pre></h4>
                <p>This method takes in a three element array or string representing a color, and the type of the color, and return <pre><code>#FFFFFF</code></pre> or <pre><code>#000000</code></pre> depending on which one has a higher <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef">contrast ratio</a> with the color provided.</p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.contrastTextColor(color,type)</span>
                console.log(Color.contrastTextColor([<span class="hljs-number">10</span>,<span class="hljs-number">20</span>,<span class="hljs-number">30</span>])); <span class="hljs-comment">// #FFFFFF</span>
                console.log(Color.contrastTextColor(<span class="hljs-string">"#e8e9ea"</span>,<span class="hljs-string">"hex"</span>)); <span class="hljs-comment">// #000000</span></code></pre>
                <h4 id="color-contrastratio"><pre><code>Color.contrastRatio</code></pre></h4>
                <p>This method takes in two Color instances and returns the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef">contrast ratio</a> between the two. </p>
                <pre><code class="lang-javascript"><span class="hljs-comment">// Color.contrastRatio(color1,color2)</span>
                <span class="hljs-keyword">const</span> <span class="hljs-built_in">red</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:<span class="hljs-string">"#ff0000"</span>,<span class="hljs-string">"type"</span>:<span class="hljs-string">"hex"</span>});
                <span class="hljs-keyword">const</span> <span class="hljs-built_in">blue</span> = <span class="hljs-keyword">new</span> Color({<span class="hljs-string">"color"</span>:[<span class="hljs-number">255</span>,<span class="hljs-number">255</span>,<span class="hljs-number">255</span>]})
                console.<span class="hljs-built_in">log</span>(Color.contrastRatio(<span class="hljs-built_in">red</span>,<span class="hljs-built_in">blue</span>)); <span class="hljs-comment">// 3.9984767707539985</span></code></pre>
                <h2 id="acknowledgements">Acknowledgements</h2>
                <p>Thanks to <a href="https://jonasjacek.github.io/colors/">Jonas Jacek</a>, <a href="http://colormine.org/colors-by-name">ColorMine.org</a>, and <a href="https://www.easyrgb.com/en/convert.php#inputFORM">EasyRGB</a> for providing some of the  sample data used for testing the color conversion. Additional resources for implementing color space transformations, including the ones used in this library, are listed below:</p>
                <ul>
                    <li><a href="http://www.color.org/iccmax/profiles/sRGB_D65_colorimetric.icc">http://www.color.org/iccmax/profiles/sRGB_D65_colorimetric.icc</a></li>
                    <li><a href="https://graphics.stanford.edu/courses/cs148-10-summer/docs/2010--kerr--cie_xyz.pdf">https://graphics.stanford.edu/courses/cs148-10-summer/docs/2010--kerr--cie_xyz.pdf</a></li>
                    <li><a href="http://www.color.org/sRGB.pdf">http://www.color.org/sRGB.pdf</a></li>
                    <li><a href="https://www.sis.se/api/document/preview/562720/">https://www.sis.se/api/document/preview/562720/</a></li>
                    <li><a href="http://coecsl.ece.illinois.edu/ge423/spring05/group8/finalproject/hsv_writeup.pdf">http://coecsl.ece.illinois.edu/ge423/spring05/group8/finalproject/hsv_writeup.pdf</a></li>
                    <li><a href="https://www.cs.rit.edu/~ncs/color/t_convert.html#XYZ%20to%20CIELUV%20&amp;%20CIELUV%20to%20XYZ">https://www.cs.rit.edu/~ncs/color/t_convert.html#XYZ%20to%20CIELUV%20&amp;%20CIELUV%20to%20XYZ</a></li>
                    <li><a href="http://docs-hoffmann.de/cielab03022003.pdf">http://docs-hoffmann.de/cielab03022003.pdf</a></li>
                    <li><a href="http://faculty.washington.edu/jokelly/gammaFaq1.htm">http://faculty.washington.edu/jokelly/gammaFaq1.htm</a></li>
                    <li><a href="http://www.brucelindbloom.com/index.html">http://www.brucelindbloom.com/index.html</a></li>
                    <li><a href="http://cs.haifa.ac.il/hagit/courses/ist/Lectures/Demos/ColorApplet/me/infoluv.html">http://cs.haifa.ac.il/hagit/courses/ist/Lectures/Demos/ColorApplet/me/infoluv.html</a></li>
                    <li>
                        <a href="https://engineering.purdue.edu/~bouman/ece637/notes/pdf/ColorSpaces.pdf">https://engineering.purdue.edu/~bouman/ece637/notes/pdf/ColorSpaces.pdf</a>
                        <h2 id="license">License</h2>
                        Copyright 2020 Vinay Pillai
                    </li>
                </ul>
                <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                <p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
            </ac-col>
        </ac-grid>
    </main>
</template>
<script type="text/javascript">
    export default {
        data(){
          return {
            navShow:true,
            navToggle:true,
          }
        },

        mounted(){
          window.addEventListener("resize",this.updateNav);
          window.addEventListener("load",this.updateNav);
        },
        methods:{
            scrollTo(selector){
                const el =document.querySelector(selector);
                el.scrollIntoView();
                document.documentElement.scrollTop -= 100;
            },
            updateNav(){
                if(window.innerWidth>915){
                  this.navShow=true;
                  this.navToggle=false;
                }else{
                  this.navToggle=true;
                }
              }
        }
    }
</script>
<style lang="scss" scoped>
    @media screen and (min-width: 992px){
        .doc-wrapper{
            max-width: calc(100% - 300px)
        }
    }
    .main-content{
        justify-content: flex-start;
        text-align: left;
        .doc-wrapper{
            padding: 0 2%;
        }
    }
    table,
    tr,
    th,
    td{
        border: solid 1px #333;
        border-collapse: collapse;
        padding: 5px;
        margin: 2% 0;
        text-align: center;
    }
    a{
        color: #0c93e4;
        text-decoration: none;
        white-space: unset;
        word-break: break-all;
    }
    pre{
        display: inline;
        white-space: pre-line;
        background-color: #eee;
        padding: 5px 10px;
        line-height: calc(1em + 10px);
        border-radius: 2px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
    .sidebar-wrapper{
        &.hide{
            display: none;
        }
        background-color: #02374E;
        min-width: 300px;
        .side-nav{
            min-height: calc(100vh - 75px);
            height: max-content;
            color: #FFF;
            ul{
                padding: 0;
                margin: 0;
                li{
                    list-style-type: none;
                    a{
                        text-decoration: none;
                        text-align: center;
                        color: #FFF;
                        padding: 10px 0;
                        border-top: solid 1px rgba(0,0,0,0.1);
                        border-bottom: solid 1px rgba(255,255,255,0.1);
                        display: block;
                        transition: background-color 0.15s ease-in-out;
                        cursor: pointer;
                        &:hover{
                            background-color: rgba(255,255,255,0.05);
                        };
                    }
                    &:not(.active) ul {
                        
                        background-color: rgba(255,255,255,0.1);
                    }
                }
            }
        }
    }
</style>