import{_ as o,V as l,W as c,X as e,Y as n,Z as a,a1 as s,F as p}from"./framework-d934f75f.js";const r={},i=e("h2",{id:"_1-微服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-微服务","aria-hidden":"true"},"#"),n(" 1 微服务")],-1),d={href:"https://www.mszlu.com/grpc/01/01.html",target:"_blank",rel:"noopener noreferrer"},u=s('<h2 id="_2-protobuf" tabindex="-1"><a class="header-anchor" href="#_2-protobuf" aria-hidden="true">#</a> 2 protobuf</h2><h3 id="_2-1-概述" tabindex="-1"><a class="header-anchor" href="#_2-1-概述" aria-hidden="true">#</a> 2.1 概述</h3><p>protobuf是谷歌开源的一种数据格式，适合高性能，对响应速度有要求的数据传输场景。</p><p>profobuf是二进制数据格式，需要编码和解码，数据本身不具有可读性。因此只能<strong>反序列化</strong>之后得到真正可读的数据。</p><p>优势：</p><ul><li>序列化后体积相比Json和XML很小，适合网络传输</li><li>支持跨平台多语言</li><li>消息格式升级和兼容性还不错</li><li>序列化反序列化速度很快</li></ul><p>安装：</p>',7),g={href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"},m=e("blockquote",null,[e("p",null,[n("下这个"),e("code",null,"protoc-21.7-win64.zip")])],-1),k=s("<li><p>配置环境变量</p><blockquote><p>举例：<code>F:\\ProgramFiles\\protoc-21.7-win64\\bin</code></p></blockquote></li><li><p>安装go专用的protoc的生成器：</p><p><code>go install github.com/golang/protobuf/protoc-gen-go</code></p><p><code>go install google.golang.org/grpc/cmd/protoc-gen-go-grpc</code></p><blockquote><p>安装后会在<code>GOPATH\\bin</code>目录下生成可执行文件<code>protoc-gen-go</code>和<code>protoc-gen-go-grpc</code>，执行<code>protoc</code>命令会自动调用这个插件</p></blockquote><blockquote><p>Goland中也要安装Protocol Buffers插件</p></blockquote></li>",2),x=s(`<p>生成文件：</p><ul><li><p><code>protoc --go_out=./xxxDir --go-grpc_out=./xxxDir ./pbfile/xxx.proto</code></p><blockquote><p>这个会生成两个文件，一个对应<code>message</code>，一个对应<code>service</code></p><p>这样写的话服务端需要额外实现一个接口，生成的proto文件里已经提供了默认实现类：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> grpcServer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	pb<span class="token punctuation">.</span>UnimplementedXxxServer
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li><p><code>protoc --go_out=plugins=grpc:./ ./xxx.proto </code></p><blockquote><p>这样只会生成一个文件</p></blockquote></li></ul><h3 id="_2-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-2-语法" aria-hidden="true">#</a> 2.2 语法</h3><p><em>“头部”：</em></p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// 指定的当前proto语法的版本，有2和3</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 从执行protoc命令的当前目录开始算起</span>
<span class="token keyword">import</span> <span class="token string">&quot;pbfile/xxx.proto&quot;</span>

<span class="token comment">// option go_package = &quot;path;name&quot;; </span>
<span class="token comment">// path 表示生成的go文件的存放地址，会自动生成目录的，一般与package一致</span>
<span class="token comment">// name 表示生成的go文件所属的包名，如果不配置就按下面的package生成</span>
<span class="token keyword">option</span> go_package<span class="token operator">=</span><span class="token string">&quot;../service&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 指定go文件生成出来的package</span>
<span class="token keyword">package</span> <span class="token keyword">service</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><em><code>message</code>：</em></p><ul><li>消息就是需要传输的<strong>数据格式</strong>的定义，通过<code>message</code>关键字指定</li></ul><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token punctuation">{</span>
	字段规则 字段类型 字段名 <span class="token operator">=</span> 标识号
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),b=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"字段规则"),n("：")]),e("ul",null,[e("li",null,[e("code",null,"required"),n("：消息体中"),e("strong",null,"必填字段"),n("，"),e("code",null,"proto3"),n("中不需要显式写明"),e("code",null,"required"),n("了")]),e("li",null,[e("code",null,"optional"),n("：消息体中"),e("strong",null,"可选字段"),n("，在go中会生成指针")]),e("li",null,[e("code",null,"repeated"),n("：消息体中"),e("strong",null,"可重复字段"),n("，在go中重复的会被定义为"),e("strong",null,"切片")])])]),e("li",null,[e("p",null,[e("strong",null,"标识号"),n("：在消息体的定义中，每个字段都必须要有一个唯一的标识号，标识号是"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"["),e("mn",null,"0"),e("mo",{separator:"true"},","),e("msup",null,[e("mn",null,"2"),e("mn",null,"29")]),e("mo",null,"−"),e("mn",null,"1"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"[0,2^{29}-1]")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord"},"2"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"29")])])])])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]")])])]),n("范围内的一个整数。")])]),e("li",null,[e("p",null,[e("strong",null,"字段映射类型"),n("：")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},".proto Type"),e("th",{style:{"text-align":"center"}},"Notes"),e("th",{style:{"text-align":"center"}},"Go Type")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"double")]),e("td",{style:{"text-align":"center"}}),e("td",{style:{"text-align":"center"}},[e("code",null,"float64")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"float")]),e("td",{style:{"text-align":"center"}}),e("td",{style:{"text-align":"center"}},[e("code",null,"float32")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"int32")]),e("td",{style:{"text-align":"center"}},"使用变长编码，对于负值的效率很低，如果可能有负值，请使用sint64替代"),e("td",{style:{"text-align":"center"}},[e("code",null,"int32")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"int64")]),e("td",{style:{"text-align":"center"}}),e("td",{style:{"text-align":"center"}},[e("code",null,"int64")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"bool")]),e("td",{style:{"text-align":"center"}}),e("td",{style:{"text-align":"center"}},[e("code",null,"bool")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"string")]),e("td",{style:{"text-align":"center"}},"一个字符串必须是UTF-8编码或者7-bit ASCII编码的文 本。"),e("td",{style:{"text-align":"center"}},[e("code",null,"string")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"bytes")]),e("td",{style:{"text-align":"center"}},"可能包含任意顺序的字节数据。"),e("td",{style:{"text-align":"center"}},[e("code",null,"[]byte")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"uint32")]),e("td",{style:{"text-align":"center"}},"使用变长编码"),e("td",{style:{"text-align":"center"}},[e("code",null,"uint32")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},[e("code",null,"uint64")]),e("td",{style:{"text-align":"center"}},"使用变长编码"),e("td",{style:{"text-align":"center"}},[e("code",null,"uint64")])]),e("tr",null,[e("td",{style:{"text-align":"center"}},"sint32"),e("td",{style:{"text-align":"center"}},"使用变长编码，这些编码在负值时比int32高效的多"),e("td",{style:{"text-align":"center"}},"int32")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"sint64"),e("td",{style:{"text-align":"center"}},"使用变长编码，有符号的整型值。编码时比通常的int64高效。"),e("td",{style:{"text-align":"center"}},"int64")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"fixed32"),e("td",{style:{"text-align":"center"}},"总是4个字节，如果数值总是比总是比128大的话，这个类型会比uint32高效。"),e("td",{style:{"text-align":"center"}},"uint32")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"fixed64"),e("td",{style:{"text-align":"center"}},"总是8个字节，如果数值总是比总是比256大的话，这个类型会比uint64高效。"),e("td",{style:{"text-align":"center"}},"uint64")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"sfixed32"),e("td",{style:{"text-align":"center"}},"总是4个字节"),e("td",{style:{"text-align":"center"}},"int32")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"sfixed64"),e("td",{style:{"text-align":"center"}},"总是8个字节"),e("td",{style:{"text-align":"center"}},"int64")])])])])],-1),v=s(`<blockquote><p><code>enum</code>类型：</p><p>和<code>message</code>一样定义在外面</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">enum</span> <span class="token class-name">enumType</span> <span class="token punctuation">{</span>
	enumElement0 <span class="token operator">=</span> <span class="token number">0</span>
	enumElement1 <span class="token operator">=</span> <span class="token number">1</span>
	enumElement2 <span class="token operator">=</span> <span class="token number">2</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>默认值：</p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">bool</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">整型</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">string</td><td style="text-align:center;">空字符串&quot;&quot;</td></tr><tr><td style="text-align:center;">枚举enum</td><td style="text-align:center;">第一个枚举元素的值，因为Protobuf3强制要求第一个枚举元素的值必须是0，所以枚举的默认值就是0；</td></tr><tr><td style="text-align:center;">message</td><td style="text-align:center;">不是null，而是DEFAULT_INSTANCE</td></tr></tbody></table></blockquote><blockquote><p><code>Any</code>类型：</p><ul><li><code>import &quot;google/protobuf/any.proto&quot;;</code></li><li><code>google.protobuf.Any</code></li></ul><p>…</p></blockquote><ul><li><p><strong>嵌套消息</strong></p><ul><li><code>message</code>定义出来的消息本身也可以作为一种<strong>字段类型</strong></li><li>在外部引用嵌套消息类型可以用<code>.</code></li></ul><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">message</span> <span class="token class-name">Son</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> 
	<span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Son</span> info <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">message</span> <span class="token class-name">PersonMessage</span> <span class="token punctuation">{</span>
	<span class="token positional-class-name class-name">Father<span class="token punctuation">.</span>Son</span> info <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>go语言中消息的<strong>序列化与反序列化</strong>：（<code>[]byte</code>）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// service.User是protobuf message 生成的</span>
user <span class="token operator">:=</span> <span class="token operator">&amp;</span>service<span class="token punctuation">.</span>User<span class="token punctuation">{</span>
    Username<span class="token punctuation">:</span> <span class="token string">&quot;mszlu&quot;</span><span class="token punctuation">,</span>
    Age<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 序列化</span>
marshal<span class="token punctuation">,</span> err <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 反序列化</span>
newUser <span class="token operator">:=</span> <span class="token operator">&amp;</span>service<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span>
err <span class="token operator">=</span> proto<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>marshal<span class="token punctuation">,</span> newUser<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><p><em><code>service</code>：</em></p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">service</span> <span class="token class-name">SearchService</span> <span class="token punctuation">{</span>
	rpc 方法名<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">stream</span><span class="token punctuation">]</span>参数消息类型<span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">stream</span><span class="token punctuation">]</span>返回值消息类型<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>如果想要将<strong>消息类型</strong>用在RPC系统中，可以在.proto文件中定义一个RPC服务接口，在go语言中会生成<code>interface</code>，这就是要进行的<strong>远程过程调用</strong></p><blockquote><p>注意这个参数和返回值类型<strong>只能是<code>message</code></strong>，而且都<strong>只能有一个</strong></p></blockquote></li><li><p><code>stream</code>代表<strong>流式</strong>通信，即会有多次请求或响应，而不是一次直接结束，下文会具体讲</p></li><li><p>protoc-gen后会生成比较复杂的<strong>存根和方法</strong>，具体用法见下文</p></li></ul><h2 id="_3-通信" tabindex="-1"><a class="header-anchor" href="#_3-通信" aria-hidden="true">#</a> 3 通信</h2><h3 id="_3-1-一元通信" tabindex="-1"><a class="header-anchor" href="#_3-1-一元通信" aria-hidden="true">#</a> 3.1 一元通信</h3><p><em>服务端：</em></p><ol><li><p>实现服务逻辑</p><ul><li>找到生成的.pb.go文件的<code>XxxxServer</code>接口，在自定义go文件中实现这个接口中的rpc方法</li></ul></li><li><p>注册服务</p><p><code>rpcServer := grpc.NewServer()</code></p><blockquote><p><code>grpc</code>是包名</p></blockquote><p><code>xxxPackage.RegisterXxxxServer(rpcServer, &amp;XxxImpl)</code></p><blockquote><p><code>xxxPackage</code>是<strong>自定义proto文件中指定的包名</strong></p></blockquote></li><li><p>启动服务：</p><p><code>listener, err := net.Listen(&quot;tcp&quot;, &quot;:port&quot;)</code></p><p><code>err := rpcServer.Serve(listener)</code></p></li></ol><hr><p><em>客户端：</em></p><ol><li><p>新建连接</p><p><code>conn, err := grpc.Dial(&quot;ip:port&quot;, grpc.WithTransportCredentials(insecure.NewCredentials()))</code></p><blockquote><p>第二个参数是安全证书</p></blockquote></li><li><p>生成客户端并调用存根</p><p><code>xxxClient := xxxPackage.NewXxxClient(conn)</code></p><p><code>respMessage, err:= xxxClient.XxxMethod(context.Background(), &amp;xxxPackage.XxxMessage)</code></p><blockquote><p>这个<code>XxxMethod</code>就是在proto文件中定义的rpc方法，<code>XxxMessage</code>和<code>respMessage</code>就是在proto文件中定义的消息类型在go语言中的实例</p></blockquote></li><li><p>关闭连接：<code>defer conn.Close()</code></p></li></ol><h3 id="_3-2-流式通信" tabindex="-1"><a class="header-anchor" href="#_3-2-流式通信" aria-hidden="true">#</a> 3.2 流式通信</h3><p><em><code>stream</code>概述：</em></p><ul><li><p>在 HTTP/1.1 的时代，同一个时刻只能对一个请求进行处理或者响应，换句话说，下一个请求必须要等当前请求处理完才能继续进行</p><blockquote><p>HTTP/1.1需要注意的是，在服务端没有response的时候，客户端是可以发起多个request的，但服务端依旧是顺序对请求进行处理, 并按照收到请求的次序予以返回。</p></blockquote></li><li><p>HTTP/2 的时代，<strong>多路复用</strong>的特性让一次同时处理多个请求成为了现实，并且同一个 TCP 通道中的请求不分先后、不会阻塞</p></li><li><p>HTTP/2 中引入了<strong>流(Stream)和帧(Frame)<strong>的概念，当 TCP 通道建立以后，后续的所有操作都是以</strong>流</strong>的方式发送的，而<strong>二进制帧是组成流的最小单位</strong>，属于协议层上的流式传输。</p><blockquote><p>HTTP/2 在一个 TCP 连接的基础上虚拟出多个 Stream, Stream 之间可以并发的请求和处理, 并且 HTTP/2 以二进制帧 (frame) 的方式进行数据传送, 并引入了头部压缩 (HPACK), 大大提升了交互效率</p></blockquote></li></ul><hr><p><em>双向<code>stream</code>的服务端：</em></p><ol><li><p>实现服务逻辑</p><ul><li>找到生成的.pb.go文件的<code>XxxxServer</code>接口，在自定义go文件中实现这个接口中的rpc方法，方法的参数对应了<strong>流式参数类型</strong>，一般类型名为：<code>xxxPackage.Xxx_XxxServer</code></li><li>接收请求：<code>for {recv, err := streamMessage.Recv()}</code><ul><li><code>recv</code>就是<strong>消息类型实例</strong></li><li>当<code>err == io.EOF</code>时代表请求结束</li></ul></li><li>响应数据：<code>err := streamMessage.Send(&amp;xxxPackage.XxxMessage{})</code></li></ul></li><li><p>注册服务</p><p><code>rpcServer := grpc.NewServer()</code></p><blockquote><p><code>grpc</code>是包名</p></blockquote><p><code>xxxPackage.RegisterXxxxServer(rpcServer, &amp;XxxImpl)</code></p><blockquote><p><code>xxxPackage</code>是<strong>自定义proto文件中指定的包名</strong></p></blockquote></li><li><p>启动服务：</p><p><code>listener, err := net.Listen(&quot;tcp&quot;, &quot;:port&quot;)</code></p><p><code>err := rpcServer.Serve(listener)</code></p></li></ol><hr><p><em>双向<code>stream</code>的客户端：</em></p><ol><li><p>新建连接</p><p><code>conn, err := grpc.Dial(&quot;ip:port&quot;, grpc.WithTransportCredentials(insecure.NewCredentials()))</code></p><blockquote><p>第二个参数是安全证书</p></blockquote></li><li><p>生成客户端并调用存根</p><p><code>xxxClient := xxxPackage.NewXxxClient(conn)</code></p><p><code>reqStream, err := xxxClient.XxxMethod(context.Background())</code></p><blockquote><p>这里返回的<code>reqStrem</code>对应了<strong>流式参数类型</strong>，一般类型名为：<code>xxxPackage.Xxx_XxxClient</code></p></blockquote></li><li><p>(开启协程)发送流式请求</p><ul><li>发送请求：<code>reqStream.Send(&amp;xxxPackage.XxxMessage{})</code></li><li>处理响应：<code>recv, err := reqStream.Recv()</code><ul><li><code>recv</code>就是<strong>消息类型实例</strong></li><li>当<code>err == io.EOF</code>时代表请求结束</li></ul></li></ul></li><li><p>关闭连接：<code>defer conn.Close()</code></p></li></ol><h2 id="_4-安全传输" tabindex="-1"><a class="header-anchor" href="#_4-安全传输" aria-hidden="true">#</a> 4 安全传输</h2>`,25);function h(y,f){const t=p("ExternalLinkIcon");return l(),c("div",null,[i,e("blockquote",null,[e("p",null,[e("a",d,[n("https://www.mszlu.com/grpc/01/01.html"),a(t)])])]),u,e("ol",null,[e("li",null,[e("p",null,[n("下载通用编译器："),e("a",g,[n("https://github.com/protocolbuffers/protobuf/releases"),a(t)])]),m]),k]),x,b,v])}const _=o(r,[["render",h],["__file","Go_gRPC.html.vue"]]);export{_ as default};
