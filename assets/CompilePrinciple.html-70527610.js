const l=JSON.parse('{"key":"v-36b1cb48","path":"/notes/ComputerTheory/CompilePrinciple.html","title":"编译原理","lang":"en-US","frontmatter":{"date":"2022-11-18T10:22:28.000Z","tag":["Computer","Compile Principle"],"category":["Computer Theory"],"description":"1 绪论 1.1 编译相关的概念 编译的概念; 编译就是将高级语言(源语言)翻译成汇编语言或机器语言(目标语言)的过程; 三种程序; 翻译程序(Translator)： 将某一种语言描述的程序(Source Program)翻译成等价的另一种语言描述的程序(Object Program)的程序; 翻译程序-解释程序(Interpreter)：一边解释一...","head":[["meta",{"property":"og:url","content":"https://SunDocker.github.io/notes/ComputerTheory/CompilePrinciple.html"}],["meta",{"property":"og:site_name","content":"SunDocker"}],["meta",{"property":"og:title","content":"编译原理"}],["meta",{"property":"og:description","content":"1 绪论 1.1 编译相关的概念 编译的概念; 编译就是将高级语言(源语言)翻译成汇编语言或机器语言(目标语言)的过程; 三种程序; 翻译程序(Translator)： 将某一种语言描述的程序(Source Program)翻译成等价的另一种语言描述的程序(Object Program)的程序; 翻译程序-解释程序(Interpreter)：一边解释一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-01T12:47:50.000Z"}],["meta",{"property":"article:tag","content":"Computer"}],["meta",{"property":"article:tag","content":"Compile Principle"}],["meta",{"property":"article:published_time","content":"2022-11-18T10:22:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-01T12:47:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-18T10:22:28.000Z\\",\\"dateModified\\":\\"2023-02-01T12:47:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 绪论","slug":"_1-绪论","link":"#_1-绪论","children":[{"level":3,"title":"1.1 编译相关的概念","slug":"_1-1-编译相关的概念","link":"#_1-1-编译相关的概念","children":[]},{"level":3,"title":"1.2 编译系统的结构","slug":"_1-2-编译系统的结构","link":"#_1-2-编译系统的结构","children":[]},{"level":3,"title":"1.3 词法分析概述","slug":"_1-3-词法分析概述","link":"#_1-3-词法分析概述","children":[]},{"level":3,"title":"1.4 语法分析概述","slug":"_1-4-语法分析概述","link":"#_1-4-语法分析概述","children":[]},{"level":3,"title":"1.5 语义分析概述","slug":"_1-5-语义分析概述","link":"#_1-5-语义分析概述","children":[]},{"level":3,"title":"1.6 中间代码生成及编译","slug":"_1-6-中间代码生成及编译","link":"#_1-6-中间代码生成及编译","children":[]},{"level":3,"title":"1.7 代码优化","slug":"_1-7-代码优化","link":"#_1-7-代码优化","children":[]},{"level":3,"title":"1.8 目标代码生成","slug":"_1-8-目标代码生成","link":"#_1-8-目标代码生成","children":[]},{"level":3,"title":"1.8 表格管理","slug":"_1-8-表格管理","link":"#_1-8-表格管理","children":[]},{"level":3,"title":"1.9 错误管理","slug":"_1-9-错误管理","link":"#_1-9-错误管理","children":[]},{"level":3,"title":"1.10 编译程序的组织与生成","slug":"_1-10-编译程序的组织与生成","link":"#_1-10-编译程序的组织与生成","children":[]}]},{"level":2,"title":"2 程序设计语言及其文法","slug":"_2-程序设计语言及其文法","link":"#_2-程序设计语言及其文法","children":[{"level":3,"title":"2.1 字母表和串","slug":"_2-1-字母表和串","link":"#_2-1-字母表和串","children":[]},{"level":3,"title":"2.2 文法","slug":"_2-2-文法","link":"#_2-2-文法","children":[]},{"level":3,"title":"2.3  语言","slug":"_2-3-语言","link":"#_2-3-语言","children":[]},{"level":3,"title":"2.4 文法的分类","slug":"_2-4-文法的分类","link":"#_2-4-文法的分类","children":[]},{"level":3,"title":"2.5 CFG的分析树","slug":"_2-5-cfg的分析树","link":"#_2-5-cfg的分析树","children":[]},{"level":3,"title":"2.6 程序设计语言","slug":"_2-6-程序设计语言","link":"#_2-6-程序设计语言","children":[]}]},{"level":2,"title":"3 词法分析","slug":"_3-词法分析","link":"#_3-词法分析","children":[{"level":3,"title":"3.1 正则表达式","slug":"_3-1-正则表达式","link":"#_3-1-正则表达式","children":[]},{"level":3,"title":"3.2 有穷自动机","slug":"_3-2-有穷自动机","link":"#_3-2-有穷自动机","children":[]},{"level":3,"title":"3.3 RE与FA的转换","slug":"_3-3-re与fa的转换","link":"#_3-3-re与fa的转换","children":[]},{"level":3,"title":"3.4 词法单元token","slug":"_3-4-词法单元token","link":"#_3-4-词法单元token","children":[]},{"level":3,"title":"3.5 词法分析器","slug":"_3-5-词法分析器","link":"#_3-5-词法分析器","children":[]},{"level":3,"title":"3.6 词法分析阶段的错误处理","slug":"_3-6-词法分析阶段的错误处理","link":"#_3-6-词法分析阶段的错误处理","children":[]}]},{"level":2,"title":"4 语法分析","slug":"_4-语法分析","link":"#_4-语法分析","children":[{"level":3,"title":"4.1 句法分析概述","slug":"_4-1-句法分析概述","link":"#_4-1-句法分析概述","children":[]},{"level":3,"title":"4.2 自顶向下分析概述","slug":"_4-2-自顶向下分析概述","link":"#_4-2-自顶向下分析概述","children":[]},{"level":3,"title":"4.3 预测分析法","slug":"_4-3-预测分析法","link":"#_4-3-预测分析法","children":[]},{"level":3,"title":"4.4 递归下降分析法","slug":"_4-4-递归下降分析法","link":"#_4-4-递归下降分析法","children":[]},{"level":3,"title":"4.5 自底向上分析概述","slug":"_4-5-自底向上分析概述","link":"#_4-5-自底向上分析概述","children":[]},{"level":3,"title":"4.4 算符优先分析法","slug":"_4-4-算符优先分析法","link":"#_4-4-算符优先分析法","children":[]},{"level":3,"title":"4.5 LR分析法","slug":"_4-5-lr分析法","link":"#_4-5-lr分析法","children":[]}]},{"level":2,"title":"5 语法制导翻译","slug":"_5-语法制导翻译","link":"#_5-语法制导翻译","children":[{"level":3,"title":"5.1 相关概念与基本思想","slug":"_5-1-相关概念与基本思想","link":"#_5-1-相关概念与基本思想","children":[]},{"level":3,"title":"5.2 语法制导定义","slug":"_5-2-语法制导定义","link":"#_5-2-语法制导定义","children":[]},{"level":3,"title":"5.3 语法制导翻译方案","slug":"_5-3-语法制导翻译方案","link":"#_5-3-语法制导翻译方案","children":[]}]},{"level":2,"title":"6 语义分析与中间代码生成","slug":"_6-语义分析与中间代码生成","link":"#_6-语义分析与中间代码生成","children":[{"level":3,"title":"6.0 中间代码的表示形式","slug":"_6-0-中间代码的表示形式","link":"#_6-0-中间代码的表示形式","children":[]},{"level":3,"title":"6.1 声明语句的翻译","slug":"_6-1-声明语句的翻译","link":"#_6-1-声明语句的翻译","children":[]},{"level":3,"title":"6.2 简单赋值和运算语句的翻译","slug":"_6-2-简单赋值和运算语句的翻译","link":"#_6-2-简单赋值和运算语句的翻译","children":[]},{"level":3,"title":"6.3 布尔表达式的翻译","slug":"_6-3-布尔表达式的翻译","link":"#_6-3-布尔表达式的翻译","children":[]},{"level":3,"title":"6.4 控制流语句的翻译","slug":"_6-4-控制流语句的翻译","link":"#_6-4-控制流语句的翻译","children":[]},{"level":3,"title":"6.5 过程调用语句的翻译","slug":"_6-5-过程调用语句的翻译","link":"#_6-5-过程调用语句的翻译","children":[]},{"level":3,"title":"6.6 回填","slug":"_6-6-回填","link":"#_6-6-回填","children":[]}]},{"level":2,"title":"7 运行存储分配","slug":"_7-运行存储分配","link":"#_7-运行存储分配","children":[{"level":3,"title":"7.1 运行存储分配概述","slug":"_7-1-运行存储分配概述","link":"#_7-1-运行存储分配概述","children":[]},{"level":3,"title":"7.2 静态存储分配","slug":"_7-2-静态存储分配","link":"#_7-2-静态存储分配","children":[]},{"level":3,"title":"7.3 栈式存储分配与调用返回序列","slug":"_7-3-栈式存储分配与调用返回序列","link":"#_7-3-栈式存储分配与调用返回序列","children":[]},{"level":3,"title":"7.4 非局部数据与访问链","slug":"_7-4-非局部数据与访问链","link":"#_7-4-非局部数据与访问链","children":[]},{"level":3,"title":"7.5 符号表的组织","slug":"_7-5-符号表的组织","link":"#_7-5-符号表的组织","children":[]},{"level":3,"title":"7.6 堆式存储分配","slug":"_7-6-堆式存储分配","link":"#_7-6-堆式存储分配","children":[]}]},{"level":2,"title":"8 代码优化","slug":"_8-代码优化","link":"#_8-代码优化","children":[]},{"level":2,"title":"9 代码生成","slug":"_9-代码生成","link":"#_9-代码生成","children":[{"level":3,"title":"9.1 代码生成的主要任务","slug":"_9-1-代码生成的主要任务","link":"#_9-1-代码生成的主要任务","children":[]},{"level":3,"title":"9.2 目标机与指令选择","slug":"_9-2-目标机与指令选择","link":"#_9-2-目标机与指令选择","children":[]}]}],"git":{"createdTime":1675255670000,"updatedTime":1675255670000,"contributors":[{"name":"SunDocker","email":"sundocker@qq.com","commits":1}]},"readingTime":{"minutes":81.25,"words":24375},"filePathRelative":"notes/ComputerTheory/CompilePrinciple.md","localizedDate":"November 18, 2022","excerpt":"","autoDesc":true}');export{l as data};
