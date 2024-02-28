import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.BjYFpaSL.js";const t="/vitepress-notice/assets/image-20240118172039188.BEBKGfY4.png",n="/vitepress-notice/assets/image-20240119092141943.Cvpz0U4V.png",l="/vitepress-notice/assets/image-20240119092947199.rZf6CVbL.png",p="/vitepress-notice/assets/image-20240119093142416.BsYV2tvc.png",m=JSON.parse('{"title":"01-初始化项目","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/vite/01-初始化项目.md","filePath":"column/views/vite/01-初始化项目.md"}'),r={name:"column/views/vite/01-初始化项目.md"},h=i(`<h1 id="_01-初始化项目" tabindex="-1">01-初始化项目 <a class="header-anchor" href="#_01-初始化项目" aria-label="Permalink to &quot;01-初始化项目&quot;">​</a></h1><p><a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">Vite官方中文文档</a></p><p>以最新文档为主，这里简化了官方文档的一些文字介绍，直接上操作。</p><h2 id="支持的模板预设" tabindex="-1">支持的模板预设 <a class="header-anchor" href="#支持的模板预设" aria-label="Permalink to &quot;支持的模板预设&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">JavaScript</th><th style="text-align:center;">TypeScript</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://vite.new/vanilla" target="_blank" rel="noreferrer">vanilla</a></td><td style="text-align:center;"><a href="https://vite.new/vanilla-ts" target="_blank" rel="noreferrer">vanilla-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/vue" target="_blank" rel="noreferrer">vue</a></td><td style="text-align:center;"><a href="https://vite.new/vue-ts" target="_blank" rel="noreferrer">vue-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/react" target="_blank" rel="noreferrer">react</a></td><td style="text-align:center;"><a href="https://vite.new/react-ts" target="_blank" rel="noreferrer">react-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/preact" target="_blank" rel="noreferrer">preact</a></td><td style="text-align:center;"><a href="https://vite.new/preact-ts" target="_blank" rel="noreferrer">preact-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/lit" target="_blank" rel="noreferrer">lit</a></td><td style="text-align:center;"><a href="https://vite.new/lit-ts" target="_blank" rel="noreferrer">lit-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/svelte" target="_blank" rel="noreferrer">svelte</a></td><td style="text-align:center;"><a href="https://vite.new/svelte-ts" target="_blank" rel="noreferrer">svelte-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/solid" target="_blank" rel="noreferrer">solid</a></td><td style="text-align:center;"><a href="https://vite.new/solid-ts" target="_blank" rel="noreferrer">solid-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/qwik" target="_blank" rel="noreferrer">qwik</a></td><td style="text-align:center;"><a href="https://vite.new/qwik-ts" target="_blank" rel="noreferrer">qwik-ts</a></td></tr></tbody></table><h2 id="搭建第一个-vite-项目" tabindex="-1">搭建第一个 Vite 项目 <a class="header-anchor" href="#搭建第一个-vite-项目" aria-label="Permalink to &quot;搭建第一个 Vite 项目&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">兼容性注意</p><p>Vite 需要 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> 版本 18+，20+。</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-izQT6" id="tab-J1SPizI" checked="checked"><label for="tab-J1SPizI">npm</label><input type="radio" name="group-izQT6" id="tab-_Irxv6N"><label for="tab-_Irxv6N">yarn</label><input type="radio" name="group-izQT6" id="tab-ldRSnmz"><label for="tab-ldRSnmz">pnpm</label><input type="radio" name="group-izQT6" id="tab-O2lYE1v"><label for="tab-O2lYE1v">bunx</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm create vite@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn create vite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm create vite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bunx create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>这里我是vue项目</p><blockquote><p>例如，要构建一个 Vite + Vue 项目，运行:</p><p>要注意版本，cmd里面按npm -v回车查看</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># npm </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, extra double</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dash is </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">needed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm create vite@latest my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn create vite my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm create vite my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># bun</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bunx create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vite my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><img src="`+t+'" alt="image-20240118172039188"><p>版本超过npm 7+</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm create vite@latest my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>找到你要创建项目地方，然后复制上面的语句，<strong>粘贴到PowerShell或者cmd中</strong></p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我这里输入了y，表示我安装vite5.1.0的版本，vite5</p><p>最好是用vite4或者vite3</p></div><img src="'+n+`" alt="image-20240119092141943"><p>一条条执行语句</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd my</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm run dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行完之后，会有一个链接</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:5173/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:5173/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><img src="`+l+'" alt="image-20240119092947199"><p>我这里因为开了个vite项目了，所以占用了5173，所以端口是5174</p><p>打开链接查看</p><img src="'+p+'" alt="image-20240119093142416" style="zoom:80%;">',25),d=[h];function k(c,o,g,E,b,v){return a(),e("div",null,d)}const y=s(r,[["render",k]]);export{m as __pageData,y as default};
