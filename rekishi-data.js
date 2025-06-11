// rekishi-data.js
const REKISHI_DATA = {
    // 時代カテゴリ
    jidai: {
        title: "日本の時代",
        description: "各時代の特徴を覚えよう",
        emoji: "⏰",
        terms: [
            { term: "縄文", description: "土器や狩猟採集生活が特徴の時代" },
            { term: "弥生", description: "稲作が伝わり金属器が普及した時代" },
            { term: "古墳", description: "巨大な古墳が権力の象徴とされた時代" },
            { term: "飛鳥", description: "仏教文化と中央集権体制が始まった時代" },
            { term: "奈良", description: "平城京に都が置かれた仏教文化の時代" },
            { term: "平安", description: "貴族文化が栄えた和風の文化の時代" },
            { term: "鎌倉", description: "武士が権力を握り幕府を開いた時代" },
            { term: "南北朝", description: "朝廷が南北に分かれて争った時代" },
            { term: "室町", description: "足利氏が京都を中心に統治した時代" },
            { term: "戦国", description: "戦国大名が各地を支配した混乱の時代" },
            { term: "安土桃山", description: "織田・豊臣が統一を目指した華やかな時代" },
            { term: "江戸", description: "徳川幕府が約260年続いた安定の時代" },
            { term: "明治", description: "近代化と文明開化が進んだ激動の時代" },
            { term: "大正", description: "民主主義と文化が栄えた短い時代" },
            { term: "昭和", description: "戦争・復興・高度経済成長があった時代" },
            { term: "平成", description: "バブル崩壊後の安定と変化の時代" },
            { term: "令和", description: "新しい日本の時代で現在も続いている" }
        ]
    },
    
    // 人物カテゴリ
    jinbutsu: {
        title: "重要人物",
        description: "歴史を動かした人々",
        emoji: "👑",
        subcategories: {
            chouJuuyou: {
                title: "超重要人物",
                terms: [
                    { term: "卑弥呼", description: "邪馬台国の女王で魏志倭人伝に記録あり" },
                    { term: "聖徳太子", description: "冠位十二階や十七条憲法を制定した皇子" },
                    { term: "藤原道長", description: "「この世をば」の歌で知られる権力者" },
                    { term: "平清盛", description: "平氏政権を確立し日宋貿易を推進した武士" },
                    { term: "源頼朝", description: "鎌倉幕府を開いた初代征夷大将軍" },
                    { term: "足利義満", description: "室町幕府の最盛期を築き金閣寺を建立" },
                    { term: "織田信長", description: "天下布武を掲げ戦国時代を終わらせた武将" },
                    { term: "豊臣秀吉", description: "刀狩や全国統一を成し遂げた天下人" }
                ]
            },
            tennou: {
                title: "よく出る天皇",
                terms: [
                    { term: "天智天皇", description: "大化の改新後、中大兄皇子として即位" },
                    { term: "聖武天皇", description: "東大寺の建立や仏教の振興を推進" },
                    { term: "桓武天皇", description: "平安京遷都を行い律令制を整えた天皇" },
                    { term: "白河上皇", description: "院政を開始し実質的な政治を主導" },
                    { term: "後鳥羽上皇", description: "承久の乱を起こし幕府と対立" },
                    { term: "後醍醐天皇", description: "建武の新政を行い武士と対立した天皇" }
                ]
            },
            shogun: {
                title: "江戸幕府の将軍",
                terms: [
                    { term: "家康", description: "江戸幕府を開き天下統一を達成した初代将軍" },
                    { term: "家光", description: "参勤交代を定め幕府の基盤を強固にした将軍" },
                    { term: "綱吉", description: "生類憐みの令を出した第5代将軍" },
                    { term: "吉宗", description: "享保の改革で財政改善に努めた名将軍" },
                    { term: "慶喜", description: "大政奉還を行い幕末に幕府を終わらせた将軍" }
                ]
            },
            seijika: {
                title: "幕末と明治の政治家",
                terms: [
                    { term: "井伊直弼", description: "安政の大獄を行い反対派を弾圧" },
                    { term: "吉田松陰", description: "長州藩の思想家で多くの志士を育成" },
                    { term: "坂本龍馬", description: "薩長同盟を仲介し倒幕の礎を築いた人物" },
                    { term: "西郷隆盛", description: "明治維新後の政治家で西南戦争を主導" },
                    { term: "板垣退助", description: "自由民権運動を推進した政治家" },
                    { term: "大隈重信", description: "憲政党を結成し立憲政治を進めた政治家" }
                ]
            },
            souri: {
                title: "歴代の総理大臣",
                terms: [
                    { term: "伊藤博文", description: "日本初の総理で明治憲法を起草" },
                    { term: "原敬", description: "平民出身初の総理で政党政治を推進" },
                    { term: "犬養毅", description: "五・一五事件で暗殺された最後の総理" },
                    { term: "吉田茂", description: "戦後日本を復興させた名総理" },
                    { term: "佐藤栄作", description: "沖縄返還を実現しノーベル平和賞受賞" }
                ]
            },
            bukkyou: {
                title: "新しい仏教を広めた人",
                terms: [
                    { term: "空海", description: "真言宗を開き高野山を拠点とした僧" },
                    { term: "最澄", description: "天台宗を開き比叡山延暦寺を建立" },
                    { term: "親鸞", description: "浄土真宗を広め念仏信仰を進めた僧侶" },
                    { term: "日蓮", description: "日蓮宗を開き南無妙法蓮華経を広めた僧" },
                    { term: "道元", description: "曹洞宗を開き坐禅を重視した禅僧" },
                    { term: "一遍", description: "時宗を開き踊念仏で布教を行った僧侶" }
                ]
            },
            gakumon: {
                title: "学問で活躍した人",
                terms: [
                    { term: "本居宣長", description: "国学を確立し『古事記伝』を著した学者" },
                    { term: "杉田玄白", description: "『解体新書』を翻訳し医学を進歩させた医師" },
                    { term: "伊能忠敬", description: "全国を測量し精密な地図を作成" },
                    { term: "福沢諭吉", description: "『学問のすすめ』を著し教育の重要性を説く" },
                    { term: "吉野作造", description: "民本主義を提唱し大正デモクラシーを推進" }
                ]
            },
            sekai: {
                title: "世界の人物",
                terms: [
                    { term: "マゼラン", description: "世界一周航海を成し遂げた探検家" },
                    { term: "ルター", description: "宗教改革を起こしプロテスタントを成立" },
                    { term: "鑑真", description: "日本に戒律を伝え唐招提寺を開いた僧" },
                    { term: "ザビエル", description: "キリスト教を日本に伝えた宣教師" },
                    { term: "孫文", description: "辛亥革命を指導し中華民国を建国" },
                    { term: "リンカーン", description: "南北戦争を指導し奴隷解放宣言を行う" },
                    { term: "ルーズベルト", description: "ニューディール政策で大恐慌を克服" },
                    { term: "ウィルソン", description: "国際連盟の設立を提唱したアメリカ大統領" },
                    { term: "ガンディー", description: "非暴力主義でインド独立を指導" },
                    { term: "ペリー", description: "黒船で日本を開国させたアメリカ海軍提督" }
                ]
            }
        }
    },
    
    // 政治・制度カテゴリ
    seiji: {
        title: "政治制度",
        description: "政治の仕組みを学ぼう",
        emoji: "🏛️",
        subcategories: {
hourei: {
    title: "よく出る法令",
    terms: [
        { term: "十七条の憲法", description: "聖徳太子が制定した道徳的な指針" },
        { term: "大宝律令", description: "律令国家の基本法として定められた法令" },
        { term: "墾田永年私財法", description: "開墾地の永久私有を認めた法令" },
        { term: "御成敗式目", description: "鎌倉幕府が制定した武士の法令" },
        { term: "徳政令", description: "借金帳消しを命じた幕府の法令" },
        { term: "分国法", description: "戦国大名が領地支配のために定めた法令" },
        { term: "刀狩令", description: "農民から武器を取り上げ治安を安定化" },
        { term: "武家諸法度", description: "武士の行動を規定した幕府の基本法" },
        { term: "慶安の御触書", description: "農民の日常生活を規定した幕府の指針" },
        { term: "異国船打払令", description: "鎖国政策を守るための命令" },
        { term: "大日本帝国憲法", description: "明治憲法とも呼ばれる近代憲法" },
        { term: "治安維持法", description: "思想弾圧のために制定された法律" },
        { term: "国家総動員法", description: "戦時体制下の労働や物資を管理する法" }
    ]
            },
            seijikei: {
                title: "政治のかたち",
                terms: [
                    { term: "摂関政治", description: "藤原氏が権力を握った平安時代の政治形態" },
                    { term: "院政", description: "上皇が政治を主導した平安後期の形態" },
                    { term: "執権政治", description: "鎌倉幕府の執権が実権を握った体制" },
                    { term: "建武の新政", description: "後醍醐天皇が行った中央集権的な政治" }
                ]
            },
            kaikaku: {
                title: "江戸幕府の政治改革",
                terms: [
                    { term: "享保の改革", description: "吉宗が行った幕府財政の立て直し政策" },
                    { term: "田沼意次の改革", description: "商業重視の政策を推進した改革" },
                    { term: "寛政の改革", description: "松平定信が行った倹約と農民救済の政策" },
                    { term: "天保の改革", description: "水野忠邦が行った幕府の財政再建政策" }
                ]
            },
            tochi: {
                title: "土地の制度",
                terms: [
                    { term: "班田収授法", description: "土地を6年ごとに再分配した律令制度" },
                    { term: "墾田永年私財法", description: "開墾地の私有を認めた土地制度" },
                    { term: "太閤検地", description: "豊臣秀吉が全国の土地を調査した制度" },
                    { term: "新田開発", description: "江戸時代に行われた農地の拡大事業" },
                    { term: "地租改正", description: "明治時代の土地税制の改革" },
                    { term: "農地改革", description: "戦後に行われた農民への土地配分政策" }
                ]
            },
            meiji: {
                title: "明治維新",
                terms: [
                    { term: "地租改正", description: "土地の税制を貨幣納付に改めた政策" },
                    { term: "藩閥政治", description: "藩出身者が実権を握った明治政府の体制" },
                    { term: "解放令", description: "被差別民への差別廃止を定めた法令" },
                    { term: "廃藩置県", description: "藩を廃止し府県制を導入した改革" },
                    { term: "版籍奉還", description: "領地と人民を政府に返還した政策" },
                    { term: "富国強兵", description: "近代化と軍備強化を進めた国策" },
                    { term: "学制", description: "全国に教育制度を整備した政策" },
                    { term: "徴兵令", description: "国民皆兵を目指した法律" },
                    { term: "殖産興業", description: "工業や産業を振興した政策" }
                ]
            },
            sengo: {
                title: "戦後の民主化政策",
                terms: [
                    { term: "軍隊の解散", description: "日本の軍事力を完全に解体" },
                    { term: "天皇の人間宣言", description: "昭和天皇が自身を人間と表明" },
                    { term: "極東国際軍事裁判", description: "戦犯を裁くために行われた裁判" },
                    { term: "財閥解体", description: "経済の独占を防ぐための改革" },
                    { term: "独占禁止法", description: "市場競争を保つための法律" },
                    { term: "農地改革", description: "小作農に土地を分配し自作農を増加" },
                    { term: "日本国憲法", description: "平和主義と基本的人権を規定" },
                    { term: "治安維持法の廃止", description: "思想の自由を確立するための施策" },
                    { term: "選挙法の改正", description: "女性参政権を認めた制度改革" },
                    { term: "教育勅語の廃止", description: "戦後民主主義教育の確立" },
                    { term: "教育基本法", description: "教育の基本理念を定めた法律" },
                    { term: "労働組合", description: "労働者の権利を守るための団体" },
                    { term: "労働三法", description: "労働者の保護を目的とした三つの法律" }
                ]
            },
            yakushoku: {
                title: "間違えやすい役職",
                terms: [
                    { term: "摂政と関白", description: "摂政は幼少天皇を補佐、関白は成人後を補佐" },
                    { term: "執権と管領", description: "執権は鎌倉幕府、管領は室町幕府の補佐役" },
                    { term: "守護と地頭", description: "守護は軍事指揮、地頭は徴税や治安維持を担当" }
                ]
            }
        }
    },
    
    // 戦争・戦いカテゴリ
    senso: {
        title: "戦争・戦い",
        description: "歴史の転換点となった戦い",
        emoji: "⚔️",
        subcategories: {
            kokunai: {
                title: "国内の戦い",
                terms: [
                    { term: "壬申の乱", description: "天智天皇の後継を巡る内乱" },
                    { term: "平治の乱", description: "源平の勢力争いが表面化した内乱" },
                    { term: "承久の乱", description: "朝廷と幕府の対立が激化した戦い" },
                    { term: "応仁の乱", description: "室町幕府の内紛で全国が混乱" },
                    { term: "関ヶ原の戦い", description: "徳川家康が勝利し天下統一を果たした戦い" },
                    { term: "戊辰戦争", description: "明治政府と旧幕府軍が戦った内戦" },
                    { term: "西南戦争", description: "西郷隆盛が中心となり政府に反乱" }
                ]
            },
            minshuu: {
                title: "民衆の戦い",
                terms: [
                    { term: "正長の土一揆", description: "農民が借金帳消しを要求した蜂起" },
                    { term: "山城の国一揆", description: "自治的な支配を行った一揆" },
                    { term: "一向一揆", description: "本願寺門徒が武力で自治を確立" },
                    { term: "島原天草一揆", description: "キリシタン弾圧に反発した大規模蜂起" },
                    { term: "大塩平八郎の乱", description: "幕府の腐敗に反発した乱" },
                    { term: "米騒動", description: "米価高騰に反発した民衆運動" }
                ]
            },
            gaikoku: {
                title: "外国との戦争",
                terms: [
                    { term: "日清戦争", description: "日本が清に勝利し朝鮮独立を実現" },
                    { term: "日露戦争", description: "日本がロシアに勝利し国際的地位を向上" },
                    { term: "日中戦争", description: "中国侵略が拡大し戦線が拡大" },
                    { term: "太平洋戦争", description: "真珠湾攻撃から始まる日本の戦争" }
                ]
            },
            sekai: {
                title: "世界の戦争",
                terms: [
                    { term: "アヘン戦争", description: "イギリスが清国を屈服させた戦争" },
                    { term: "南北戦争", description: "アメリカで奴隷制廃止を巡る内戦" },
                    { term: "第一次世界大戦", description: "同盟国と連合国の間で戦われた大規模戦争" },
                    { term: "第二次世界大戦", description: "枢軸国と連合国が争った世界規模の戦争" },
                    { term: "朝鮮戦争", description: "朝鮮半島で南北が対立した戦争" }
                ]
            },
            kakumei: {
                title: "世界の革命",
                terms: [
                    { term: "名誉革命", description: "イギリスで王権を制限し議会政治を確立" },
                    { term: "フランス革命", description: "フランスで旧体制を倒し共和制を樹立" },
                    { term: "辛亥革命", description: "中華民国を建国し清朝を滅ぼした革命" },
                    { term: "ロシア革命", description: "ロシアで社会主義体制を樹立した革命" }
                ]
            }
        }
    },
    
    // 国際関係カテゴリ
    kokusai: {
        title: "国際関係",
        description: "世界との関わりを知ろう",
        emoji: "🌍",
        subcategories: {
            boueki: {
                title: "貿易",
                terms: [
                    { term: "日宋貿易", description: "平清盛が推進した宋との貿易" },
                    { term: "勘合貿易", description: "明との間で勘合符を用いた貿易" },
                    { term: "南蛮貿易", description: "ポルトガルやスペインとの貿易" },
                    { term: "朱印船貿易", description: "朱印状を持つ船が行ったアジア貿易" }
                ]
            },
            jouyaku: {
                title: "条約",
                terms: [
                    { term: "日米和親条約", description: "ペリー来航後、日本が開国した条約" },
                    { term: "日米修好通商条約", description: "不平等条約として知られる条約" },
                    { term: "下関条約", description: "日清戦争の講和条約で多くの領土を得る" },
                    { term: "ポーツマス条約", description: "日露戦争の講和条約で仲裁はアメリカ" },
                    { term: "サンフランシスコ平和条約", description: "日本の独立回復を認めた条約" },
                    { term: "日米安全保障条約", description: "日本の防衛をアメリカが支援する条約" }
                ]
            },
            dekigoto: {
                title: "外国との出来事",
                terms: [
                    { term: "条約改正", description: "日本が不平等条約を改正し独立性を高める" },
                    { term: "三国干渉", description: "遼東半島返還を日本に迫った列強の干渉" },
                    { term: "日英同盟", description: "日本とイギリスの間で結ばれた軍事同盟" },
                    { term: "韓国併合", description: "日本が韓国を併合し統治下に置く" },
                    { term: "二十一ヶ条の要求", description: "中国に日本が突きつけた要求" },
                    { term: "シベリア出兵", description: "日本がロシア内戦に介入した出来事" },
                    { term: "日独伊三国同盟", description: "日本が枢軸国として参戦した軍事同盟" }
                ]
            },
            sengen: {
                title: "宣言",
                terms: [
                    { term: "ポツダム宣言", description: "日本の無条件降伏を求めた宣言" },
                    { term: "日ソ共同宣言", description: "ソ連との国交正常化を果たした宣言" },
                    { term: "日中共同声明", description: "中国との国交正常化を宣言した文書" },
                    { term: "独立宣言", description: "アメリカがイギリスからの独立を宣言" },
                    { term: "人権宣言", description: "フランス革命期に基本的人権を定めた文書" }
                ]
            }
        }
    },
    
    // 文化カテゴリ
    bunka: {
        title: "文化",
        description: "各時代の文化的特徴",
        emoji: "🎨",
        terms: [
            { term: "飛鳥", description: "仏教が伝来し文化が発展した時代" },
            { term: "天平", description: "正倉院や古典文学が栄えた時代" },
            { term: "国風", description: "日本独自の平安文化が形成された時代" },
            { term: "鎌倉", description: "武士文化や禅宗が広がった時代" },
            { term: "北山", description: "金閣寺に代表される豪華な文化" },
            { term: "東山", description: "銀閣寺に代表される侘び寂びの文化" },
            { term: "桃山", description: "城郭建築や華麗な文化が栄えた時代" },
            { term: "元禄", description: "町人文化や歌舞伎が広がった時代" },
            { term: "化政", description: "江戸後期の浮世絵や文学が栄えた時代" },
            { term: "文明開化", description: "明治期の近代化を象徴する文化" }
        ]
    },
    
    // その他・特殊カテゴリ
    sonota: {
        title: "その他重要事項",
        description: "覚えておきたい重要事項",
        emoji: "📚",
        subcategories: {
            bunmei: {
                title: "古代文明",
                terms: [
                    { term: "メソポタミア", description: "チグリス・ユーフラテス川で栄えた文明" },
                    { term: "エジプト", description: "ナイル川流域のピラミッドで有名な文明" },
                    { term: "インダス", description: "モヘンジョダロなど計画都市が特徴" },
                    { term: "中国", description: "黄河・長江流域で発展した四大文明の一つ" },
                    { term: "ギリシャ", description: "ポリスや哲学で知られる地中海文明" }
                ]
            },
            chugoku: {
                title: "中国の王朝",
                terms: [
                    { term: "秦", description: "始皇帝が中国を初めて統一" },
                    { term: "漢", description: "シルクロードを通じて繁栄した王朝" },
                    { term: "魏", description: "三国時代の一国で洛陽を都とした" },
                    { term: "隋", description: "大運河を建設した短命な王朝" },
                    { term: "唐", description: "長安を都にし国際的に栄えた王朝" },
                    { term: "元", description: "モンゴル帝国が建てた中国の王朝" },
                    { term: "明", description: "朱元璋が建国し海禁政策を行った" },
                    { term: "清", description: "満州族が建国し最後の王朝となる" }
                ]
            },
            basho: {
                title: "重要な場所",
                terms: [
                    { term: "種子島", description: "鉄砲が伝来した歴史的な島" },
                    { term: "長崎", description: "鎖国時代の海外交流の窓口" },
                    { term: "下田", description: "日米和親条約で開港した港" },
                    { term: "函館", description: "日本初の国際貿易港として開港" },
                    { term: "根室", description: "ロシアとの交渉で重要視された地域" },
                    { term: "遼東半島", description: "日清戦争で獲得し三国干渉で返還" },
                    { term: "広島", description: "原爆が投下された戦争終結の象徴の地" }
                ]
            },
            suuji: {
                title: "数字がつくもの",
                terms: [
                    { term: "三一独立運動", description: "朝鮮で日本からの独立を訴えた運動" },
                    { term: "五四運動", description: "中国で反帝国主義を掲げた学生運動" },
                    { term: "五一五事件", description: "海軍青年将校が首相を暗殺した事件" },
                    { term: "二二六事件", description: "陸軍青年将校が起こしたクーデター未遂事件" }
                ]
            }
        }
    }
};

// データ利用用の便利関数
const RekishiDataUtils = {
    // 全カテゴリ取得
    getAllCategories: () => Object.keys(REKISHI_DATA),
    
    // 指定カテゴリのデータ取得
    getCategoryData: (category) => REKISHI_DATA[category],
    
    // ランダムな問題セット生成
    generateRandomSet: (category, count = 8) => {
        const data = REKISHI_DATA[category];
        if (!data) return [];
        
        let allTerms = [];
        if (data.terms) {
            allTerms = [...data.terms];
        } else if (data.subcategories) {
            Object.values(data.subcategories).forEach(sub => {
                allTerms = allTerms.concat(sub.terms);
            });
        }
        
        // シャッフルして指定数取得
        for (let i = allTerms.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allTerms[i], allTerms[j]] = [allTerms[j], allTerms[i]];
        }
        
        return allTerms.slice(0, count);
    }
};