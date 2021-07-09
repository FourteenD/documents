import{r as n,o as e,c as a,a as t,F as s,d as o,b as c}from"./app.ae88895a.js";const r={},d=o('<h2 id="一些重要的事" tabindex="-1"><a class="header-anchor" href="#一些重要的事" aria-hidden="true">#</a> 一些重要的事</h2><h3 id="防止泄漏" tabindex="-1"><a class="header-anchor" href="#防止泄漏" aria-hidden="true">#</a> 防止泄漏</h3><p>记得设置 <code>default_server</code>，否则在删除对应的 <code>conf</code> 后可能导致不该出现的 <code>server</code> 暴露出来。</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n\t<span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span> default_server</span><span class="token punctuation">;</span> <span class="token comment"># 在 listen 后追加，而非 server_name</span>\n\t<span class="token directive"><span class="token keyword">server_name</span>  xxx.example.com example.com</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="禁止-ip-访问" tabindex="-1"><a class="header-anchor" href="#禁止-ip-访问" aria-hidden="true">#</a> 禁止 IP 访问</h3><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">listen</span>   [::]:80 default_server</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">server_name</span>  _</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">return</span> <span class="token number">444</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h2><p>虽然现在大部分时候都上 docker 了，但偶尔自己编译模块时手动安装还是比较方便的。</p><h3 id="_1-检测源" tabindex="-1"><a class="header-anchor" href="#_1-检测源" aria-hidden="true">#</a> 1. 检测源</h3><p>首先需要检查当前源是否有 Nginx（CentOS示例），当没有的时候需要自己添加源。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum list <span class="token operator">|</span> <span class="token function">grep</span> nginx\n<span class="token comment"># nginx.x86_64                             1:1.12.2-2.el7                  epel   </span>\n<span class="token comment"># nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   </span>\n<span class="token comment"># nginx-filesystem.noarch                  1:1.12.2-2.el7    </span>\n</code></pre></div><h3 id="_2-更新-yum-源并安装" tabindex="-1"><a class="header-anchor" href="#_2-更新-yum-源并安装" aria-hidden="true">#</a> 2. 更新 yum 源并安装</h3>',12),l={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},i=c("官网"),p=c(" 中 Nginx 稳定版本已经是 "),h=t("code",null,"1.20.1",-1),g=c(" ，而检测结果依然是 "),m=t("code",null,"1.12.2",-1),u=c("，"),x={href:"http://nginx.org/en/linux_packages.html",target:"_blank",rel:"noopener noreferrer"},k=c("修改"),f=c(" yum 源来获取最新版。"),y=o('<p>更新 Nginx 的源在 <a href="/os/centos/install-the-latest-version-of-nginx">CentOS</a>、<a href="/os/ubuntu/install-the-latest-version-of-nginx">Ubuntu</a> 中稍有不同，需要区别安装。</p><h3 id="_3-编译安装" tabindex="-1"><a class="header-anchor" href="#_3-编译安装" aria-hidden="true">#</a> 3. 编译安装</h3><p>当需要添加一些第三方模块时就可以使用该形式，以下为 <code>CentOS 7.6</code>。</p><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4>',4),b=c("进入"),v={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},_=c("官网"),q=c("获取对应的版本下载链接。"),w=o('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.20.1.tar.gz\n\n<span class="token function">tar</span> -zxvf nginx-1.20.1.tar.gz <span class="token comment"># 解压</span>\nll nginx-1.20.1 <span class="token comment"># 验证</span>\n<span class="token function">cp</span> -r nginx-1.20.1/contrib/vim/* ~/.vim <span class="token comment"># 拷贝 vim 配置</span>\n<span class="token function">vim</span> nginx-1.20.1/conf/nginx.conf <span class="token comment"># 验证</span>\n</code></pre></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>./configure --help <span class="token operator">|</span> <span class="token function">less</span> <span class="token comment"># 查看帮助</span>\n./configure --prefix<span class="token operator">=</span>/home/shanyuhai/nginx <span class="token comment"># 指定目录</span>\n\n<span class="token comment"># 可能会缺乏依赖（解决方案）</span>\nyum <span class="token function">install</span> -y httpd-devel pcre perl pcre-devel zlib zlib-devel GeoIP GeoIP-devel <span class="token comment"># 重新执行，当然也可以先使用 yum 安装自动获取一遍依赖（暂不清楚是否会导致负面影响）</span>\n\n<span class="token comment"># 结果如下</span>\n<span class="token comment"># creating objs/Makefile # 新增目录</span>\n\n<span class="token comment"># nginx path prefix: &quot;/home/shanyuhai/nginx&quot;</span>\n<span class="token comment"># nginx binary file: &quot;/home/shanyuhai/nginx/sbin/nginx&quot;</span>\n<span class="token comment"># nginx modules path: &quot;/home/shanyuhai/nginx/modules&quot;</span>\n<span class="token comment"># nginx configuration prefix: &quot;/home/shanyuhai/nginx/conf&quot;</span>\n<span class="token comment"># nginx configuration file: &quot;/home/shanyuhai/nginx/conf/nginx.conf&quot;</span>\n<span class="token comment"># nginx pid file: &quot;/home/shanyuhai/nginx/logs/nginx.pid&quot;</span>\n<span class="token comment"># nginx error log file: &quot;/home/shanyuhai/nginx/logs/error.log&quot;</span>\n<span class="token comment"># nginx http access log file: &quot;/home/shanyuhai/nginx/logs/access.log&quot;</span>\n<span class="token comment"># nginx http client request body temporary files: &quot;client_body_temp&quot;</span>\n<span class="token comment"># nginx http proxy temporary files: &quot;proxy_temp&quot;</span>\n<span class="token comment"># nginx http fastcgi temporary files: &quot;fastcgi_temp&quot;</span>\n<span class="token comment"># nginx http uwsgi temporary files: &quot;uwsgi_temp&quot;</span>\n<span class="token comment"># nginx http scgi temporary files: &quot;scgi_temp&quot;</span>\n\nll objs <span class="token comment"># 查看稍后 make 的内容</span>\n<span class="token function">make</span> <span class="token comment"># 编译</span>\nll objs <span class="token comment"># 验证</span>\n<span class="token function">make</span> <span class="token function">install</span> <span class="token comment"># 安装</span>\n\n/home/shanyuhai/nginx/sbin/nginx -V <span class="token comment"># 验证</span>\n</code></pre></div><h2 id="必须知道的基本操作" tabindex="-1"><a class="header-anchor" href="#必须知道的基本操作" aria-hidden="true">#</a> 必须知道的基本操作</h2><h3 id="启用安全组" tabindex="-1"><a class="header-anchor" href="#启用安全组" aria-hidden="true">#</a> 启用安全组</h3><p>在一顿操作之后，明明本地可以访问，为啥外网访问不了？可能是你忘记开放云服务器的安全组了。</p><p>操作流程：</p><p><code>登录</code> &gt; <code>控制台</code> &gt; <code>云服务器ECS（左侧）</code> &gt; <code>安全组</code> &gt; <code>配置规则</code> &gt; <code>添加安全组规则</code> &gt; <code>填充内容</code> &gt; <code>确定</code></p><h3 id="进程与端口" tabindex="-1"><a class="header-anchor" href="#进程与端口" aria-hidden="true">#</a> 进程与端口</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 进程</span>\n<span class="token comment"># ps 是 Process Status 的简写，可以通过 ps 来查看对应的进程</span>\n<span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> nginx\n<span class="token comment"># 端口</span>\n<span class="token comment"># netstat 是 net status 的简写， 可以查看有哪些端口正在被占用</span>\n<span class="token function">netstat</span> -lntup\n</code></pre></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 直接启动</span>\nnginx\n<span class="token comment"># systemctl 启动</span>\nsystemctl start nginx.service\n<span class="token comment"># 开机自启</span>\nsystemctl <span class="token builtin class-name">enable</span> nginx.service\n</code></pre></div><h3 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># normal quit</span>\nnginx -s quit\n<span class="token comment"># force stop</span>\nnginx -s stop\n<span class="token comment"># systemctl</span>\nsystemctl stop nginx.service\n\n<span class="token comment"># kill pid</span>\n<span class="token function">killall</span> nginx\n<span class="token comment">## 或</span>\n<span class="token function">kill</span> -9 pid\n</code></pre></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># normal</span>\nnginx -s reload\n<span class="token comment"># systemctl</span>\nsystemctl restart nginx.service\n</code></pre></div><h2 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h2>',17),$=c("Nginx 提供了丰富的"),P={href:"https://nginx.org/en/docs/varindex.html",target:"_blank",rel:"noopener noreferrer"},N=c("内置变量"),T=c("，如果引入了其他模块还会有对应模块的变量。"),z=o('<table><thead><tr><th style="text-align:center;">variable</th><th style="text-align:center;">module</th><th>description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>$args</code></td><td style="text-align:center;"></td><td>请求参数</td></tr><tr><td style="text-align:center;"><code>$uri</code></td><td style="text-align:center;"></td><td>当前请求的 <code>uri</code>，不带参数</td></tr><tr><td style="text-align:center;"><code>$request_uri</code></td><td style="text-align:center;"></td><td>请求的 <code>uri</code>，带完整参数</td></tr><tr><td style="text-align:center;"><code>$host</code></td><td style="text-align:center;"></td><td>请求报文的 <code>host</code> 首部</td></tr><tr><td style="text-align:center;"><code>$hostname</code></td><td style="text-align:center;"><code>ngx_http_core_module</code></td><td>Nginx 服务运行在主机的主机名</td></tr><tr><td style="text-align:center;"><code>$remote_addr</code></td><td style="text-align:center;"><code>ngx_stream_core_module</code></td><td>客户端 IP</td></tr><tr><td style="text-align:center;"><code>$remote_port</code></td><td style="text-align:center;"><code>ngx_stream_core_module</code></td><td>客户端端口</td></tr><tr><td style="text-align:center;"><code>$request_filename</code></td><td style="text-align:center;"></td><td>用户请求中的 <code>uri</code> 经过本地 <code>root</code> 或 <code>alias</code> 映射后的本地文件路径。可将其加入 <code>log</code> 中研究 <code>root</code> 和 <code>alias</code></td></tr><tr><td style="text-align:center;"><code>$server_addr</code></td><td style="text-align:center;"><code>ngx_stream_core_module</code></td><td>服务器 IP</td></tr><tr><td style="text-align:center;"><code>$server_port</code></td><td style="text-align:center;"><code>ngx_stream_core_module</code></td><td>服务求端口</td></tr><tr><td style="text-align:center;"><code>$server_protocol</code></td><td style="text-align:center;"></td><td>服务器的 HTTP 协议版本，例 <code>HTTP/1.0</code>、<code>HTTP/1.1</code></td></tr><tr><td style="text-align:center;"><code>$scheme</code></td><td style="text-align:center;"></td><td>请求中的协议，例 <code>http</code>、<code>https</code></td></tr></tbody></table><p>指定 <code>module</code> 时基本上都有 <code>ngx_http_core_module</code>。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',3),I={href:"http://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},S=c("Nginx"),j=t("li",null,"《精通Nginx》：Dimitri Aivaliotis 著",-1);r.render=function(o,c){const r=n("OutboundLink");return e(),a(s,null,[d,t("p",null,[t("a",l,[i,t(r)]),p,h,g,m,u,t("a",x,[k,t(r)]),f]),y,t("p",null,[b,t("a",v,[_,t(r)]),q]),w,t("p",null,[$,t("a",P,[N,t(r)]),T]),z,t("ol",null,[t("li",null,[t("a",I,[S,t(r)])]),j])],64)};export default r;
