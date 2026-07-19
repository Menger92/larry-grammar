# 例句来源审计表

本文件用于管理项目中的例句来源。它不替代正文讲义，只负责回答一个问题：某个例句是否已经有视频画面、用户截图、用户笔记或用户上传讲义作为依据。

## 1. 审计原则

1. 正文例句优先使用 A 级证据：视频画面、用户截图、用户笔记、用户上传讲义。
2. 来源确认和表达正确是两件事：截图中的问题句仍要标为“纠错对比”或改成“校准表达”，不能因有来源就当作推荐句。
3. 已经写入正文但暂时没有明确来源的例句，先进入“待校准”区，不继续扩写。
4. 用户明确要求补充真实文章分析框架时，可以加入外部例句，但必须标为“外部补充”，不得伪装成 Larry 原例。
5. HTML 生成前，优先处理本文件中的 P1 条目。

### 正文例句状态标签

| 标签 | 含义 | 正文处理 |
| --- | --- | --- |
| 【Larry 原例】 | 已由视频、截图或用户笔记确认，并适合作正常示范。 | 可直接讲解；需要时仍说明语境。 |
| 【校准表达】 | 来源内容的拼写、搭配、时态或自然度经过校正。 | 正文使用校正版，审计表保留原貌和改动。 |
| 【纠错对比】 | 故意展示错误、歧义或不推荐形式。 | 必须同时给出推荐表达和具体错因。 |
| 【依赖语境】 | 语法可能成立，但脱离语境容易误判。 | 明确它成立所需的语境或目标含义。 |
| 【外部补充】 | 为真实文章分析补入，不是 Larry 原例。 | 与 Larry 主线分区展示并写明用途。 |
| 【待确认】 | 暂未找到可靠来源或判断仍需核验。 | 只留在审计区，不作为正文普通例句。 |

## 2. 已确认例句

| 来源 | 例句 / 内容 | 对应文件 | 状态 |
| --- | --- | --- | --- |
| V20 视频画面 | I received his letter until yesterday. | `source/content/tense.md` | 已确认为错误例句 |
| V20 视频画面 | I didn't receive his letter until yesterday. | `source/content/tense.md` | 已确认为正确例句 |
| V20 视频画面 | We left until it stopped raining. | `source/content/tense.md` | 已确认为错误例句 |
| V20 视频画面 | We didn't leave until it stopped raining. | `source/content/tense.md` | 已确认为正确例句 |
| V20 视频画面 | I was playing video games until 12 o'clock. | `source/content/tense.md` | 已确认 |
| V20 视频画面 | I was not playing video games until 12 o'clock. | `source/content/tense.md` | 已确认 |
| V21 视频画面 | They built a house. | `source/content/tense.md` | 已确认 |
| V21 视频画面 | He persuaded his friend to go back to school. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | 本轮 `source/content/tense.md` 中新增的时态规则和例句 | `source/content/tense.md` | 已确认，集中来源为用户截图与 `assets/时态/Larry的语法课_时态_讲义.pdf` |
| V19-V22 用户截图 / PDF 讲义 | People die. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | I write a book. | `source/content/tense.md` | 讲义按无语境单句标为错误；项目已校准为“依赖语境，脱离语境不自然但并非语法错误” |
| V19-V22 用户截图 / PDF 讲义 | I write books. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | He played basketball with his friends every Sunday. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | President Biden is visiting China next week. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | She was shouting like mad when we got in. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | He has turned off the light. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | I haven't seen him since yesterday. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | It's the first time I've been here. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | When I got to the station, the train had gone. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | He has been learning English for years. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | He had been learning English for years. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | I will leave for America next month. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | We're going to have a meeting over this. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | Nobody is to leave this room. | `source/content/tense.md` | 已确认 |
| V19-V22 用户截图 / PDF 讲义 | The train is leaving this afternoon. | `source/content/tense.md` | 已确认 |
| V24-V26 用户截图 | If I can help you, I will definitely do so. / If I could help you, I would definitely do so. | `source/content/subjunctive.md` | 已确认，用于真实条件句 VS 非真实条件句 |
| V24-V26 用户截图 | If Apple wanted me, I would consider it. | `source/content/subjunctive.md` | 已确认，用于将来假设 |
| V24-V26 用户截图 | If we had five million, we could buy a house outright. | `source/content/subjunctive.md` | 已确认，用于现在假设 |
| V24-V26 用户截图 | If I had known Apple was your family's company, I wouldn't have taken this job in the first place. | `source/content/subjunctive.md` | 已确认，用于过去假设 |
| V24-V26 用户截图 | Had I known you were like this, I would have taken Tencent's offer today. | `source/content/subjunctive.md` | 已确认，用于倒装结构虚拟句 |
| V24-V26 用户截图 | If my mom hadn't divorced him back then, I'd be cruising in a Bugatti by now. | `source/content/subjunctive.md` | 已确认，用于交叉时态虚拟句 |
| V24-V26 用户截图 | Given another chance, I would still divorce Susan to marry Sally. | `source/content/subjunctive.md` | 已确认，用于无条件虚拟句 |
| V24-V26 用户截图 | If only we had five million! We could buy a house outright. | `source/content/subjunctive.md` | 已确认，用于含蓄条件句 |
| V24-V26 用户截图 | Michael insisted that this marriage be ended as soon as possible. | `source/content/subjunctive.md` | 已确认，用于名词性从句中的虚拟语气 |
| V24-V26 用户截图 | It is important that Jimmy make sure Sally doesn't take away any property. | `source/content/subjunctive.md` | 已确认，用于 It is + adj + that 从句 |
| V24-V26 用户截图 | It's high time (that) you divorced Susan. | `source/content/subjunctive.md` | 已确认，用于 high time 结构 |
| V24-V26 用户截图 | I wish (that) my dad had never divorced Apple's boss. | `source/content/subjunctive.md` | 已确认，用于 wish + 宾语从句 |
| V24-V26 用户截图 | Long live The People's Republic of China! | `source/content/subjunctive.md` | 已确认，用于非主流形式虚拟句 |
| V24-V26 用户截图 | It seems as if you were going to divorce Susan. | `source/content/subjunctive.md` | 已确认，用于 as if 虚拟 |
| V24-V26 用户截图 | I would rather (that) it were winter. | `source/content/subjunctive.md` | 已确认，用于其他类型虚拟 |
| V27 视频画面 | A singular countable noun cannot be used without a determiner. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | I like dog. | `source/content/morphology.md` | 已确认为错误例句；正文标为【纠错对比】 |
| V27 用户截图 | I like dogs. / I like the dog. / I like Michael's dog. | `source/content/morphology.md` | 已确认，为 `I like dog.` 的改写 |
| V27 用户截图 | Apple is red. | `source/content/morphology.md` | 已确认为错误例句；正文标为【纠错对比】 |
| V27 用户截图 | The apple is red. / That apple is red. | `source/content/morphology.md` | 已确认，为 `Apple is red.` 的改写 |
| V27 用户截图 | Cat is on table. | `source/content/morphology.md` | 已确认为错误例句；正文标为【纠错对比】 |
| V27 用户截图 | Water is important. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | Cats are cute. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | For Jimmy, school is hard. | `source/content/morphology.md` | 已确认，零限定词例句 |
| V27 用户截图 | Youngsters are increasingly alienated from society. | `source/content/morphology.md` | 已确认，零限定词例句 |
| V27 用户截图 | He always has company on Friday evenings. | `source/content/morphology.md` | 已确认，零限定词例句 |
| V27 用户截图 | A dog is barking by the door. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | The dog is barking by the door. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | Every/Each/Either dog is lovable. | `source/content/morphology.md` | 已确认 |
| V27 用户截图 | This dog is cute. / Michael's dog won the game. | `source/content/morphology.md` | 已确认 |
| V28 用户截图 | all the many problems / all the three books | `source/content/morphology.md` | 已确认；all the three 标为【依赖语境】，普通表达优先 all three |
| V28 用户截图 | both the several answers / both the few reasons | `source/content/morphology.md` | 已确认；语义范围冲突，正文标为【纠错对比】 |
| V28 用户截图 | half the few choices / half the ten chapters | `source/content/morphology.md` | 已确认；前者标为【依赖语境】 |
| V28 用户截图 | I don't like his idea. / They shook their heads firmly. | `source/content/morphology.md` | 已确认 |
| V28 用户截图 | Those shops are closed in 2025. / Many shops are closed in 2025. | `source/content/morphology.md` | 已确认；正文标为【依赖语境】，需补足时间参照 |
| V28 用户截图 | I like the/that book. / I like the/those books. | `source/content/morphology.md` | 已确认 |
| V28 用户截图 | I bought a/one book yesterday. | `source/content/morphology.md` | 已确认 |
| V28 用户截图 | I don't like his the idea. | `source/content/morphology.md` | 已确认为限定词叠加错误例句；正文标为【纠错对比】 |
| V01-V02 用户截图 | The beautiful flowers have a sweet fragrance. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | The flowers which are stolen from Michael have a sweet fragrance. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | The flowers stolen from Michael have a sweet fragrance. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | Her performance was surprisingly good. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | Her performance was good when her mom is around. | `source/content/modification-relations.md` | 已确认；正文统一过去参照，标为【校准表达】 |
| V01-V02 用户截图 | He runs slowly. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | He runs if he is followed. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | She speaks very softly. | `source/content/modification-relations.md` | 已确认 |
| V01-V02 用户截图 | She speaks like a gun. | `source/content/modification-relations.md` | 已确认；正文标为【依赖语境】并补自然表达 |
| 用户截图 | What she said about the incident surprised everyone. | `source/content/noun-clause.md` | 已确认，需要保留图片化分析 |
| 用户截图 | I don't know what your name is. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I don't know why you are laughing. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I don't know where Sally lives. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I don't know what happened yesterday. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | That Sally is beautiful is true. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | It is true that Sally is beautiful. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I find it unbelievable that Sally is beautiful. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I find that Sally is beautiful unreasonable. | `source/content/noun-clause.md` | 已确认，为截图中的不推荐表达 |
| 用户截图 | Our teacher made it a rule that we have to speak English in class. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | Our teacher made that we have to speak English in class a rule. | `source/content/noun-clause.md` | 已确认，为截图中的不推荐表达 |
| 用户截图 | That he is a transsexual doesn't matter. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I don't know that he is a transsexual. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | The problem is that he is a transsexual. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | I am unsure about whether we should go to the party. | `source/content/noun-clause.md` | 已确认 |
| 用户截图 | Sally is a teacher who is warm-hearted, hardworking, and quick in learning. | `source/content/adjective-clause.md` | 已确认，需要保留图片化分析 |
| 用户截图 | He is reading a book that is about human history. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | I want to have a friend who/whom/that/不填 I can fully trust. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | This is the town where I grew up. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | I'll never forget the day when I met you. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | That is the reason why Sally hates her friend Mary. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | I don't wear clothes which make me different from other people. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | I don't wear clothes, which makes me different from other people. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | My grandmother, who is 70 years old, loves programming. | `source/content/adjective-clause.md` | 已确认 |
| 用户截图 | The puma is up a tree. | `source/content/preposition.md` | 已确认 |
| 用户截图 | He looked up. | `source/content/preposition.md` | 已确认 |
| 用户截图 | Prices are up. | `source/content/preposition.md` | 已确认 |
| 用户截图 | It depends on what they do. | `source/content/preposition.md` | 已确认 |
| 用户截图 | The car stopped and then drove on. | `source/content/preposition.md` | 已确认 |
| 用户截图 | The TV is on. | `source/content/preposition.md` | 已确认 |
| 用户截图 | The cat on the table is named Floppy. | `source/content/preposition.md` | 已确认 |
| 用户截图 | He walked through the park. | `source/content/preposition.md` | 已确认 |
| 用户截图 | She apologized for arriving late to the meeting. | `source/content/preposition.md` | 已确认 |
| 用户截图 | She's not certain about whether she'll go to the party or not. | `source/content/preposition.md` | 已确认 |
| 用户截图 | It happens. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | Sally is beautiful. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | Cats love fish. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | He gave me a gift. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | I find the movie interesting. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | Boys play football. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | Running every morning helps me stay fit. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | To learn a new language takes time and dedication. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | That boys play football is great. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | She sings beautifully. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | He has been studying all night. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I ate breakfast this morning. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The flowers bloomed in the garden. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | That soup smells delicious. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | You should brush your teeth twice a day. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | She ate sushi. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | He gave his sister a birthday gift. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I enjoy reading books. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I want to learn English. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | She believes that she will come to the party. | `source/content/simple-sentence.md` | 截图为 `She believe...`，正文按主谓一致更正 |
| V04 用户截图 | The red car is mine. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The book that I borrowed from the library was really interesting. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The man with the hat is my uncle. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The running water is very soothing. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The best way to learn a language is to practice speaking it. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | The broken vase on the table needs to be fixed. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I will meet you tomorrow. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I will meet you at the park. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I will meet you at the park tomorrow. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I will meet you at the park tomorrow if it doesn't rain. | `source/content/simple-sentence.md` | 已确认 |
| V04 用户截图 | I will meet you at the park tomorrow to get the computer fixed if it doesn't rain. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | She painted the room blue. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | We consider him a fool. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | I found the movie to be very interesting. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | You should leave the door open. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | He is walking around naked. | `source/content/simple-sentence.md` | 已确认 |
| 用户截图 | I asked him to buy something for me. | `source/content/simple-sentence.md` | 已确认 |
| V13 用户笔记 | Sally runs as if she is flying. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | I worked hard when I was at school. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | You grow smarter as you grow older. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | I handed in my homework before I was asked to. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | I arrived after he had left. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | Sally and I haven't met each other since I became a middle school student. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | He was waiting for me at my home until I came back. | `source/content/adverbial-clause.md` | 已确认 |
| V13 用户笔记 | We didn't go out until it stopped raining. | `source/content/adverbial-clause.md` | 已确认 |
| V14 用户笔记 | I need a pen to write with. | `source/content/nonfinite.md` | 已确认 |
| V14 用户笔记 | Sally will be proud to win the competition. | `source/content/nonfinite.md` | 已确认 |
| V14 用户笔记 | She found it impossible to leave home. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | Sally will be proud for her sister to win the competition. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | It's very wise for us not to argue with the teacher. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | It's very wise of Michael not to argue with the teacher. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | I need a bed to sleep in. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | Michael is the best person to consult about the matter with. | `source/content/nonfinite.md` | 已确认；正文注明 consult 的两种搭配路线 |
| V14 用户截图 | I hope to visit Beijing someday. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | I'm sorry to have troubled you so much. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | They were said to be making a new experiment. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | The problem remains to be further discussed. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | It is an honor for me to have been invited to the meeting. | `source/content/nonfinite.md` | 已确认 |
| V14 用户截图 | I want this job to be done! | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Learning English is easy. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Talking to him is nice. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It's nice talking to him. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Using a language is not easy. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It's not easy using a language. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It's no use talking to him. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It's not much use buying a car. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It's a waste of time trying to explain. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | There is no use arguing with him. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | There is no point in doing that. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | There is no telling what will happen tomorrow. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Larry suggests playing basketball. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally admitted taking the money. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | You should avoid eating too much. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I hate lying and cheating. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | She insisted on paying for it. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally couldn't keep from laughing. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Michael thought of writing to me. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Have you ever dreamed of becoming an astronaut? | `source/content/nonfinite.md` | 已确认；截图冠词按语法更正为 an |
| V15 用户截图 | I look forward to leaving this town and starting a new life. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I am not used to driving fast. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I used to drive fast. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I once had a hard time getting used to living in Beijing. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | This book is worth reading. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Talking to him is talking to a wall. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally's hobby is painting. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Seeing is believing. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | a sleeping bed / a reading room / a swimming pool / a washing machine | `source/content/nonfinite.md` | 已确认，用于动名词作定语 |
| V15 用户截图 | a flying jacket | `source/content/nonfinite.md` | 已确认，用于动名词定语和分词定语对比 |
| V15 用户截图 | a flying bird | `source/content/nonfinite.md` | 已确认，用于动名词 VS 分词最小对照 |
| V15 用户截图 | a swimming pool | `source/content/nonfinite.md` | 已确认，用于动名词 VS 分词最小对照 |
| V15 用户截图 | a swimming duck | `source/content/nonfinite.md` | 已确认，用于动名词 VS 分词最小对照 |
| V15 用户截图 | Sally insisted on reading the letter. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally insisted on my reading the letter. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Her going off in such a hurry is strange. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I'm not happy about Michael's forgetting to pay. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I remember him doing this before. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I remember being taken to Beijing when I was a little kid. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally hates being called "a beauty". | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I'm not used to being treated like that. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | He denied having been there. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I could not remember having heard anyone say that before. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | She admits having seen us. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I appreciate having been given the chance to study abroad. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | The garden needs watering. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Your hair wants cutting. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | He deserves shooting first. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | He deserves to shoot first. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I like playing basketball. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I like to play basketball. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | He hates drinking. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | He hates to drink. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Being invited to the party made Michael happy. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | It would make Michael happy to be invited to the party. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | She decided to avoid eating sugary foods. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Michael admitted stealing the money. | `source/content/nonfinite.md` | 已确认；截图按时态和主谓一致更正 |
| V15 用户截图 | We can't afford to buy such an expensive house. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | They chose to pay a visit to America. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Prices continue to rise. / Prices continue rising. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Sally stopped crying. / Sally stopped to cry. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | Remember to mail this letter tomorrow. / I don't remember mailing the letter. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I hate to trouble you. / I hate troubling you. | `source/content/nonfinite.md` | 已确认 |
| V15 用户截图 | I cannot help to repair the car. / I cannot help laughing. | `source/content/nonfinite.md` | 已确认；【依赖语境】两个 help 不是同一结构 |
| V16 用户截图 | a sinking ship | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | falling leaves | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | the rising sun | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a sleeping dog | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | The girl standing at the door is my classmate Sally. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | The little girl smiling at me is really lovable. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a puzzling problem | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | an understanding man | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a broken cup | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a respected writer | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a trained dog | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a sunken ship | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | a married man | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | returned students | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Waiting for a bus, a little cat walked to me. | `source/content/nonfinite.md` | 已确认为悬垂分词问题句 |
| V16 用户截图 | Waiting for a bus, I saw a little cat walk to me. | `source/content/nonfinite.md` | 已确认，为修正句 |
| V16 用户截图 | After doing my homework, the room was cleaned. | `source/content/nonfinite.md` | 已确认为悬垂分词问题句 |
| V16 用户截图 | After doing my homework, I cleaned the room. | `source/content/nonfinite.md` | 已确认，为修正句 |
| V16 用户截图 | When using the computer, the password must be remembered. | `source/content/nonfinite.md` | 已确认为悬垂分词问题句 |
| V16 用户截图 | When using the computer, we have to remember the password. | `source/content/nonfinite.md` | 已确认，为修正句 |
| V16 用户截图 | Nobody having anymore to say, the meeting was closed. | `source/content/nonfinite.md` | 已确认；正文【校准表达】为 any more |
| V16 用户截图 | All the money spent, we started looking for work. | `source/content/nonfinite.md` | 已确认，独立分词结构 |
| V16 用户截图 | Weather permitting, we'll go fishing tomorrow. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | The old man often takes a walk after dinner with his dog following him. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | A car drove by, with smoke pouring from its behind. | `source/content/nonfinite.md` | 已确认；正文【校准表达】为 from behind it |
| V16 用户截图 | Generally speaking, men are stronger than women. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Strictly speaking, girls are smarter than boys. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Judging from what he has done, he is a lazy student. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Talking of English, she is the best student. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Considering she has no experience, she has done a good job. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Granting that he has made a mistake, he is not to blame. | `source/content/nonfinite.md` | 已确认，固定结构 |
| V16 用户截图 | Given more time, we could have done better. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Once installed, this machine operates automatically. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Locking the door, he went home. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Hearing the joke, he started laughing. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Being busy, he will not come today. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Not knowing what to do next, I need your advice. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Having been abroad for years, he still can't speak English. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Although understanding no Chinese, he was able to communicate. | `source/content/nonfinite.md` | 已确认；正文【校准表达】为 Although not understanding any Chinese |
| V16 用户截图 | Her husband died, leaving her with two children. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | He fired, killing an enemy. | `source/content/nonfinite.md` | 已确认；正文补出 a shot 以避免搭配和语境误导 |
| V16 用户截图 | When waiting for the bus, I saw a little cat walk to me. | `source/content/nonfinite.md` | 已确认，保留连接词 |
| V16 用户截图 | Although living in America, Sally knows a lot about China. | `source/content/nonfinite.md` | 已确认，保留连接词 |
| V16 用户截图 | If seen from far away, the sheep looks like a dog. | `source/content/nonfinite.md` | 已确认，保留连接词 |
| V16 用户截图 | After having done her homework, Sally went home. | `source/content/nonfinite.md` | 已确认，保留连接词 |
| V16 用户截图 | This is humiliating. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | What he says sounds more convincing. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | Things are always complicated. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | She is deeply read in literature. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | singing birds / buzzing bees / dancing flames / flowing river / barking dogs / developing countries | `source/content/nonfinite.md` | 已确认，现在分词作定语 |
| V16 用户截图 | on the following day / on the day following | `source/content/nonfinite.md` | 已确认，分词定语位置对比 |
| V16 用户截图 | She has no living parents. / She has no parents living. | `source/content/nonfinite.md` | 已确认，分词定语位置对比 |
| V16 用户截图 | The arriving train is from Beijing. / The train arriving by eight is from Beijing. | `source/content/nonfinite.md` | 已确认，句末重心 |
| V16 用户截图 | The stolen car was found abandoned in a nearby alley. / The car stolen from the factory was found abandoned in a nearby alley. | `source/content/nonfinite.md` | 已确认，句末重心 |
| V16 用户截图 | published writings / a charmed girl / a moved object / boiled water | `source/content/nonfinite.md` | 已确认；a moved object 标为【依赖语境】 |
| V16 用户截图 | faded roses / a sunken boat / fallen leaves / the frozen lake | `source/content/nonfinite.md` | 已确认，不及物动词过去分词作定语 |
| V16 用户截图 | The built house is beautiful. | `source/content/nonfinite.md` | 已确认；正文【校准表达】为 The newly built house... |
| V16 用户截图 | The house being built is beautiful. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | The house to be built will be beautiful. | `source/content/nonfinite.md` | 已确认 |
| V16 用户截图 | I heard Sally singing last night. | `source/content/nonfinite.md` | 已确认，SVOC 结构 |
| V16 用户截图 | We saw the sun rising from behind the trees. | `source/content/nonfinite.md` | 已确认，SVOC 结构 |
| V16 用户截图 | I can smell something burning. | `source/content/nonfinite.md` | 已确认，SVOC 结构 |
| V16 用户截图 | I saw Michael climb up the tree. / I saw Michael climbing up the tree. | `source/content/nonfinite.md` | 已确认，不定式补足语 VS 分词补足语 |
| V16 用户截图 | Having sung a song, he sat down. / Singing a song, he sat down. | `source/content/nonfinite.md` | 已确认，一般式 VS 完成式 |
| V16 用户截图 | Having eaten the hamburger, he went out. / Eating the hamburger, he went out. | `source/content/nonfinite.md` | 已确认，一般式 VS 完成式 |
| V16 用户截图 | Chinese children grown in the US speak good English. | `source/content/nonfinite.md` | 已确认为 grow 用法问题句 |
| V16 用户截图 | Chinese children raised in the US speak good English. | `source/content/nonfinite.md` | 已确认，为修正句 |
| V16 用户截图 | Chinese children who grow up in the US speak good English. | `source/content/nonfinite.md` | 已确认，为修正句 |
| V17 用户截图 | I don't know that he is a transsexual. / I don't know his being a transsexual. | `source/content/nonfinite.md` | 已确认，名词性从句转动名词短语 |
| V17 用户截图 | Whether he is a transsexual or not doesn't matter. / His being a transsexual or not doesn't matter. | `source/content/nonfinite.md` | 已确认，名词性从句转动名词短语 |
| V17 用户截图 | The problem is what he is. / The problem is his identity. | `source/content/nonfinite.md` | 已确认，名词性从句转名词短语 |
| V17 用户截图 | What you decide will greatly impact our future. / Your decision will greatly impact our future. | `source/content/nonfinite.md` | 已确认，名词性从句转名词短语 |
| V17 用户截图 | His dream is that he becomes a successful entrepreneur. / His dream is to become a successful entrepreneur. | `source/content/nonfinite.md` | 已确认；正文将内容从句【校准表达】为 will become |
| V17 用户截图 | We need a teacher who is warm-hearted, hardworking, and quick in learning. | `source/content/nonfinite.md` | 已确认，形容词性从句转换 |
| V17 用户截图 | We need a warm-hearted, hard-working, and fast-learning teacher. | `source/content/nonfinite.md` | 已确认，形容词短语转换 |
| V17 用户截图 | Michael likes friends who are always ready to help. / Michael likes ready-to-help friends. | `source/content/nonfinite.md` | 已确认，形容词性从句转形容词化短语 |
| V17 用户截图 | I like the flowers that are on the table. / I like the flowers on the table. | `source/content/nonfinite.md` | 已确认，形容词性从句转介词短语 |
| V17 用户截图 | In Fujian there exist certain traditions that people accustomed to Northern ways of thinking find strange. | `source/content/nonfinite.md` | 已确认，形容词性从句转换 |
| V17 用户截图 | When I opened the window, the cat jumped out. / With my opening the window, the cat jumped out. | `source/content/nonfinite.md` | 已确认；with 版本生硬，正文改用 on 并保留来源原句 |
| V17 用户截图 | People plant trees where there is a lot of sunshine. / People plant trees in sunlit places. | `source/content/nonfinite.md` | 已确认，地点从句转介词短语 |
| V17 用户截图 | I opened the window so that the cat jumped out. / I opened the window, the cat jumping out. | `source/content/nonfinite.md` | 已确认；独立分词版本标为【依赖语境】 |
| V17 用户截图 | I opened the window so that the cat could jump out. / I opened the window, the cat being able to jump out. | `source/content/nonfinite.md` | 已确认；后者不能稳定表达目的，标为【纠错对比】 |
| V17 用户截图 | If you heat water, you can change it into steam. / Heating water, you can change it into steam. | `source/content/nonfinite.md` | 已确认，条件从句转分词状语 |
| V17 用户截图 | Though I opened the window, the cat didn't jump out. / Despite my opening the window, the cat didn't jump out. | `source/content/nonfinite.md` | 已确认，让步从句转介词短语 |
| V17 用户截图 | He raised his head as though he was going to command silence. / He raised his head as though to command silence. | `source/content/nonfinite.md` | 已确认，方式从句转 as though + 不定式 |
| V17 用户截图 | To hear him sing, you might take him for a girl. | `source/content/nonfinite.md` | 已确认；句首不定式先触发目的义，标为【纠错对比】 |
| V17 用户截图 | If you hear him sing, you might take him for a girl. | `source/content/nonfinite.md` | 已确认，条件从句更明确 |
| V17 用户截图 | When you hear him sing, you might take him for a girl. | `source/content/nonfinite.md` | 已确认，时间从句更明确 |
| V17 用户截图 | Finding the door locked, I went home. / Because I found the door locked, I went home. | `source/content/nonfinite.md` | 已确认，分词位置和语义 |
| V17 用户截图 | I went home, finding the door locked. / I went home, and I found the door locked. | `source/content/nonfinite.md` | 已确认，分词位置和语义 |
| V17 用户截图 | After having finished her presentation, she felt relieved that all her hard work had paid off and that she had effectively conveyed her message to the audience. | `source/content/nonfinite.md` | 已确认，从句和非谓语混用 |
| V17 用户截图 | Despite the doctor's advice to rest, she insisted on going to work, fearing that her absence would create a backlog of tasks that needed her attention. | `source/content/nonfinite.md` | 已确认，从句和非谓语混用 |
| V17 用户截图 | After years of practicing martial arts, he had developed a strong sense of discipline and self-control, which benefited him not only in physical combat but also in other aspects of life. | `source/content/nonfinite.md` | 已确认，从句和非谓语混用 |
| V17 用户截图 | Despite having studied diligently for the exam, she couldn't shake off the feeling of anxiety, wondering if she had prepared enough to achieve a good score. | `source/content/nonfinite.md` | 已确认，从句和非谓语混用 |

### 2.1 用户批准的外部补充例句

这些句子用于补足 Larry 五大句型之外的真实文章表层分析。它们不是 Larry 视频原例，HTML 中必须显示“外部补充”标签。

| 纳入原因 | 例句 | 对应文件 | 状态 |
| --- | --- | --- | --- |
| SVA 扩展骨架 | She lives in Beijing. | `source/content/simple-sentence.md` | 【外部补充】 |
| SVOA / 必要地点补足 | She put the keys on the table. | `source/content/simple-sentence.md`、`source/content/preposition.md` | 【外部补充】 |
| 存在句 | There is a serious supply-chain risk. | `source/content/simple-sentence.md` | 【外部补充】 |
| 形式主语 / 外置 | It is likely that prices will rise. | `source/content/simple-sentence.md` | 【外部补充】 |
| 被动表层 | The proposal was rejected by regulators. | `source/content/simple-sentence.md` | 【外部补充】 |
| 并列分句 | Demand fell, but costs rose. | `source/content/simple-sentence.md` | 【外部补充】 |
| 介词短语作主语补足 / 表语 | The book is on the desk. | `source/content/preposition.md` | 【外部补充】 |

## 3. 待校准例句区

这些例句已经存在于正文或专题文件中，但目前没有逐条写入 `evidence-log.md`。处理方式不是立即删除，而是后续按视频顺序确认：确认后移入“已确认例句”；无法确认时再替换为截图例句或删减。

| 优先级 | 文件 | 范围 | 当前问题 | 处理动作 |
| --- | --- | --- | --- | --- |
| P1 | `source/content/noun-clause.md` | 名词性从句核心、that / whether / if、形式主语 / 形式宾语 | 形式宾语和 that 省略已补截图例句；whether / if 仍需继续补全。 | 回看 V08-V09 或使用用户截图补证据。 |
| P1 | `source/content/adjective-clause.md` | 关系代词、关系副词、限制性 / 非限制性 | 大量例句来自用户截图，但尚未逐条登记来源。 | 按 V10-V12、用户截图逐条登记。 |
| P1 | `source/content/adverbial-clause.md` | 状语从句连接词与例句 | 例句集中且来源未逐条登记。 | 等用户确认从句章节结构后统一校准。 |
| P1 | `source/content/nonfinite.md` | 不定式、动名词、分词、压缩结构 | 当前例句较多，部分可能来自旧稿，需要来源核验。 | 按 V14-V17 与笔记图片编号对齐。 |
| P2 | `source/content/simple-sentence.md` | 主谓宾定状补、SV/SVP/SVO/SVOO/SVOC | 多数例句来自截图，但未逐条记录。 | 按 V04-V06 逐条登记。 |
| P2 | `source/content/preposition.md` | 介词三步判断、介词短语功能 | 用户截图已提供较多例句，但来源表未完全同步。 | 将 `up/on`、介词后接成分例句登记到证据表。 |

## 4. 不再新增的内容类型

| 类型 | 处理 |
| --- | --- |
| 为了凑表格而临时编写的例句 | 不再新增。 |
| 没有视频或截图来源、也没有明确学习用途的“看起来合理”例句 | 不进入正文。 |
| 只有标题可确认的视频内容 | 只写章节入口、判断框架、待补方向。 |
| 外部理论或其他语法书例句 | 只有用户明确要求纳入时，才放入“外部补充”区并显示来源身份。 |

## 5. 下一轮校准顺序

1. 先处理 `source/content/noun-clause.md`：名词性从句是当前从句章节的基础。
2. 再处理 `source/content/adjective-clause.md`：用户已提供大量定语从句截图，适合逐条登记。
3. 然后处理 `source/content/preposition.md` 和 `source/content/simple-sentence.md`：它们是前面章节的复习入口。
4. 最后处理 `source/content/nonfinite.md` 和 `source/content/adverbial-clause.md`。
