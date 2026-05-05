const seedPerfumes = [
  {
    brand: "Chanel",
    name: "No. 5",
    year: 1921,
    audience: "Kadın",
    family: "Floral Aldehit",
    accords: ["aldehit", "pudralı", "çiçeksi"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Aldehitler", "Neroli", "Ylang-ylang", "Bergamot"],
    heart: ["Yasemin", "Mayıs gülü", "İris", "Müge"],
    base: ["Sandal ağacı", "Vetiver", "Vanilya", "Amber"],
    longevity: 4,
    projection: 3,
    color: "#f1d08a",
    cap: "#202020",
    seasonNote: "Temiz, pudralı ve çiçeksi yapısı ilkbaharda çok dengeli; serin ofis ve akşam kullanımlarında yıl boyu taşınabilir."
  },
  {
    brand: "Chanel",
    name: "Coco Mademoiselle",
    year: 2001,
    audience: "Kadın",
    family: "Chypre Floral",
    accords: ["narenciye", "paçuli", "gül"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Portakal", "Bergamot", "Mandalina"],
    heart: ["Türk gülü", "Yasemin", "Mimoza"],
    base: ["Paçuli", "Vetiver", "Vanilya", "Beyaz misk"],
    longevity: 4,
    projection: 4,
    color: "#f1b7a6",
    cap: "#d7b887",
    seasonNote: "Parlak açılışı sıcak günleri kaldırır; paçuli tabanı sonbahar akşamlarında daha şık durur."
  },
  {
    brand: "Chanel",
    name: "Bleu de Chanel",
    year: 2010,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["narenciye", "tütsü", "odunsu"],
    seasons: ["Dört Mevsim"],
    top: ["Greyfurt", "Limon", "Nane", "Pembe biber"],
    heart: ["Zencefil", "Yasemin", "Muskat", "Iso E Super"],
    base: ["Sedir", "Tütsü", "Sandal ağacı", "Paçuli"],
    longevity: 4,
    projection: 3,
    color: "#5e7c95",
    cap: "#1e2630",
    seasonNote: "Temiz ve modern yapısı yaz akşamı, ofis ve kış gündüzü dahil geniş bir kullanım aralığı verir."
  },
  {
    brand: "Dior",
    name: "Sauvage",
    year: 2015,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["bergamot", "ambroksan", "baharat"],
    seasons: ["Dört Mevsim"],
    top: ["Kalabriya bergamotu", "Biber"],
    heart: ["Lavanta", "Pembe biber", "Sichuan biberi", "Elemi"],
    base: ["Ambroksan", "Sedir", "Labdanum"],
    longevity: 5,
    projection: 5,
    color: "#89a6b5",
    cap: "#111820",
    seasonNote: "Ferahlığı yazı kaldırır, ambroksan gücü soğuk havada da hissedilir; doz kontrolü önemli."
  },
  {
    brand: "Dior",
    name: "J'adore",
    year: 1999,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["çiçeksi", "meyveli", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Armut", "Mandalina", "Kavun", "Bergamot"],
    heart: ["Yasemin", "Müge", "Gül", "Orkide"],
    base: ["Misk", "Sedir", "Vanilya"],
    longevity: 4,
    projection: 3,
    color: "#f0c96d",
    cap: "#b58a38",
    seasonNote: "Aydınlık beyaz çiçekler sıcak havada parıldar; öğleden sonra ve özel günlerde iyi çalışır."
  },
  {
    brand: "Dior",
    name: "Homme Intense",
    year: 2011,
    audience: "Erkek",
    family: "Odunsu Çiçeksi Misk",
    accords: ["iris", "amber", "deri"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Lavanta"],
    heart: ["İris", "Armut", "Ambrette"],
    base: ["Virginia sediri", "Vetiver"],
    longevity: 5,
    projection: 4,
    color: "#b98d68",
    cap: "#242221",
    seasonNote: "Yoğun iris ve amber etkisi serin havada zarifleşir; yaz sıcağında ağır hissedilebilir."
  },
  {
    brand: "Dior",
    name: "Fahrenheit",
    year: 1988,
    audience: "Erkek",
    family: "Deri Aromatik",
    accords: ["deri", "menekşe", "odunsu"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Lavanta", "Mandalina", "Alıç", "Bergamot"],
    heart: ["Menekşe yaprağı", "Sedir", "Muskat", "Karanfil"],
    base: ["Deri", "Vetiver", "Tonka", "Amber"],
    longevity: 4,
    projection: 4,
    color: "#d27535",
    cap: "#2b2725",
    seasonNote: "Benzinimsi deri ve odunsu gövde serin günlerde karakterini daha temiz gösterir."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre",
    year: 2019,
    audience: "Kadın",
    family: "Amber Füjer",
    accords: ["lavanta", "portakal çiçeği", "vanilya"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Lavanta", "Mandalina", "Frenk üzümü"],
    heart: ["Portakal çiçeği", "Yasemin", "Lavanta"],
    base: ["Vanilya", "Misk", "Sedir", "Ambergris"],
    longevity: 4,
    projection: 4,
    color: "#e2a766",
    cap: "#191614",
    seasonNote: "Aromatik lavanta ile tatlı vanilya arası denge kurar; serin akşamlar ve gece kullanımı daha güçlüdür."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Black Opium",
    year: 2014,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["kahve", "vanilya", "beyaz çiçek"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Pembe biber", "Armut", "Portakal çiçeği"],
    heart: ["Kahve", "Yasemin", "Acı badem", "Meyan"],
    base: ["Vanilya", "Paçuli", "Sedir", "Kaşmir ağacı"],
    longevity: 4,
    projection: 4,
    color: "#574d8c",
    cap: "#17151f",
    seasonNote: "Kahve ve vanilya sıcaklığı kış gecelerinde rahat açılır; sıcak yaz günlerinde fazla tatlılaşabilir."
  },
  {
    brand: "Yves Saint Laurent",
    name: "La Nuit de L'Homme",
    year: 2009,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["kakule", "lavanta", "sedir"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kakule"],
    heart: ["Lavanta", "Bergamot", "Virginia sediri"],
    base: ["Vetiver", "Kimyon"],
    longevity: 3,
    projection: 3,
    color: "#7a6a5d",
    cap: "#25211f",
    seasonNote: "Kakule merkezli sıcaklığı serin akşamda daha çekici; gündüz ve yüksek sıcaklık için düşük doz gerekir."
  },
  {
    brand: "Giorgio Armani",
    name: "Acqua di Gio",
    year: 1996,
    audience: "Erkek",
    family: "Aromatik Akuatik",
    accords: ["deniz", "narenciye", "aromatik"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Lime", "Limon", "Bergamot", "Neroli"],
    heart: ["Deniz notaları", "Yasemin", "Biberiye", "Kişniş"],
    base: ["Beyaz misk", "Sedir", "Paçuli", "Amber"],
    longevity: 3,
    projection: 3,
    color: "#b9d5d6",
    cap: "#ccd2d2",
    seasonNote: "Deniz ve narenciye profili sıcak havada ferah kalır; yaz gündüzü için en güvenli seçeneklerden biridir."
  },
  {
    brand: "Giorgio Armani",
    name: "Si",
    year: 2013,
    audience: "Kadın",
    family: "Chypre Meyveli",
    accords: ["frenk üzümü", "vanilya", "gül"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Frenk üzümü nektarı"],
    heart: ["Mayıs gülü", "Frezya"],
    base: ["Vanilya", "Paçuli", "Ambroksan", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    color: "#b96d7a",
    cap: "#222222",
    seasonNote: "Meyveli-vanilyalı chypre gövdesi serin havada kadifemsi durur; yazın tatlılık öne çıkabilir."
  },
  {
    brand: "Giorgio Armani",
    name: "Code",
    year: 2004,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["tonka", "deri", "narenciye"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot", "Limon"],
    heart: ["Yıldız anason", "Zeytin çiçeği", "Guaiac ağacı"],
    base: ["Tonka fasulyesi", "Deri", "Tütün"],
    longevity: 4,
    projection: 3,
    color: "#4b5d76",
    cap: "#171a1f",
    seasonNote: "Tonka ve deri sıcaklığı gece kullanımına daha yatkın; serin havada daha temiz iz bırakır."
  },
  {
    brand: "Tom Ford",
    name: "Oud Wood",
    year: 2007,
    audience: "Unisex",
    family: "Odunsu Amber",
    accords: ["oud", "sandal", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Gül ağacı", "Kakule", "Biber"],
    heart: ["Oud", "Sandal ağacı", "Vetiver"],
    base: ["Tonka fasulyesi", "Vanilya", "Amber"],
    longevity: 4,
    projection: 3,
    color: "#6e5c4d",
    cap: "#1c1a18",
    seasonNote: "Kuru odunsu amber yapısı soğuk havada daha rafine; yazın resmi akşam dışında ağır durabilir."
  },
  {
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    year: 2007,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["tütün", "vanilya", "kakao"],
    seasons: ["Kış"],
    top: ["Tütün yaprağı", "Baharatlar"],
    heart: ["Vanilya", "Kakao", "Tonka", "Tütün çiçeği"],
    base: ["Kuru meyveler", "Odunsu notalar"],
    longevity: 5,
    projection: 5,
    color: "#8b5d3b",
    cap: "#2a211b",
    seasonNote: "Yoğun tütün-vanilya tatlılığı soğuk hava parfümüdür; kış akşamı performansı çok yüksektir."
  },
  {
    brand: "Tom Ford",
    name: "Neroli Portofino",
    year: 2011,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["neroli", "turunçgil", "beyaz çiçek"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Bergamot", "Mandalina", "Limon", "Lavanta"],
    heart: ["Neroli", "Portakal çiçeği", "Yasemin", "Pittosporum"],
    base: ["Amber", "Angelica", "Ambrette"],
    longevity: 3,
    projection: 3,
    color: "#52a9b2",
    cap: "#1c6c72",
    seasonNote: "Sabunsu ve parlak narenciye profili sıcak havada en iyi halini gösterir."
  },
  {
    brand: "Tom Ford",
    name: "Black Orchid",
    year: 2006,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["orkide", "trüf", "paçuli"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Trüf", "Ylang-ylang", "Bergamot", "Frenk üzümü"],
    heart: ["Siyah orkide", "Baharatlar", "Meyveli notalar", "Lotus"],
    base: ["Paçuli", "Çikolata", "Vanilya", "Tütsü"],
    longevity: 5,
    projection: 5,
    color: "#4b233c",
    cap: "#111111",
    seasonNote: "Koyu çiçek, çikolata ve paçuli dokusu soğuk gece parfümü gibi davranır."
  },
  {
    brand: "Creed",
    name: "Aventus",
    year: 2010,
    audience: "Erkek",
    family: "Chypre Meyveli",
    accords: ["ananas", "huş", "misk"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Ananas", "Bergamot", "Frenk üzümü", "Elma"],
    heart: ["Huş", "Paçuli", "Yasemin", "Gül"],
    base: ["Misk", "Meşe yosunu", "Ambergris", "Vanilya"],
    longevity: 4,
    projection: 4,
    color: "#a8b6a7",
    cap: "#202020",
    seasonNote: "Meyveli açılış sıcak havayı kaldırır; isli huş tabanı serin akşamda daha belirgindir."
  },
  {
    brand: "Creed",
    name: "Silver Mountain Water",
    year: 1995,
    audience: "Unisex",
    family: "Aromatik Yeşil",
    accords: ["çay", "misk", "narenciye"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Bergamot", "Mandalina"],
    heart: ["Yeşil çay", "Frenk üzümü"],
    base: ["Misk", "Sandal ağacı", "Galbanum", "Petitgrain"],
    longevity: 3,
    projection: 3,
    color: "#d7e6ea",
    cap: "#c6cdd0",
    seasonNote: "Soğuk yeşil çay ve misk hissi temiz yaz kullanımı için idealdir."
  },
  {
    brand: "Creed",
    name: "Green Irish Tweed",
    year: 1985,
    audience: "Erkek",
    family: "Odunsu Çiçeksi Misk",
    accords: ["yeşil", "menekşe", "ambergris"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Limon verbena", "İris"],
    heart: ["Menekşe yaprağı"],
    base: ["Ambergris", "Sandal ağacı"],
    longevity: 4,
    projection: 3,
    color: "#8eaa76",
    cap: "#1f3125",
    seasonNote: "Çimenimsi yeşil yapı ilkbaharda canlıdır; temiz odunsu tabanı sayesinde yıl boyu klasik kalır."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    year: 2015,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["safran", "amberwood", "şekerimsi"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Safran", "Yasemin"],
    heart: ["Amberwood", "Ambergris"],
    base: ["Köknar reçinesi", "Sedir"],
    longevity: 5,
    projection: 5,
    color: "#d34848",
    cap: "#c0b08a",
    seasonNote: "Havadar ama güçlü amberwood yapısı dört mevsim taşınabilir; en çarpıcı hali serin havada çıkar."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Aqua Universalis",
    year: 2009,
    audience: "Unisex",
    family: "Narenciye Misk",
    accords: ["temiz", "misk", "beyaz çiçek"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Bergamot", "Limon"],
    heart: ["Müge", "Portakal çiçeği"],
    base: ["Misk", "Hafif odunsu notalar"],
    longevity: 3,
    projection: 2,
    color: "#d7e7df",
    cap: "#e5e0d8",
    seasonNote: "Sabunsu temizliği sıcak hava ve ofis için rahat; ağır taban notası bırakmaz."
  },
  {
    brand: "Le Labo",
    name: "Santal 33",
    year: 2011,
    audience: "Unisex",
    family: "Odunsu Aromatik",
    accords: ["sandal", "deri", "kakule"],
    seasons: ["Sonbahar", "Dört Mevsim"],
    top: ["Kakule", "Menekşe"],
    heart: ["Sandal ağacı", "Papirüs", "Deri"],
    base: ["Sedir", "Amber", "İris"],
    longevity: 4,
    projection: 4,
    color: "#c4a76f",
    cap: "#25221a",
    seasonNote: "Kuru sandal ve deri sonbaharda daha derli toplu; düşük dozda yıl boyu imza kokusu olabilir."
  },
  {
    brand: "Le Labo",
    name: "Another 13",
    year: 2010,
    audience: "Unisex",
    family: "Amber Misk",
    accords: ["ambroksan", "misk", "odunsu"],
    seasons: ["Dört Mevsim"],
    top: ["Armut", "Elma", "Narenciye"],
    heart: ["Ambrette", "Yasemin", "Yosun"],
    base: ["Ambroksan", "Misk", "Iso E Super"],
    longevity: 4,
    projection: 3,
    color: "#d6d0c3",
    cap: "#4b4b43",
    seasonNote: "Ten kokusu hissi veren misk-ambroksan yapısı sıcak ve soğuk havada uyumlu davranır."
  },
  {
    brand: "Byredo",
    name: "Gypsy Water",
    year: 2008,
    audience: "Unisex",
    family: "Odunsu Aromatik",
    accords: ["ardıç", "vanilya", "sandal"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Bergamot", "Limon", "Biber", "Ardıç"],
    heart: ["Tütsü", "Çam iğnesi", "Orris"],
    base: ["Sandal ağacı", "Vanilya", "Amber"],
    longevity: 3,
    projection: 2,
    color: "#d4c8aa",
    cap: "#efefea",
    seasonNote: "Hafif reçineli odunsuluk ve yumuşak vanilya bahar-yaz için nazik bir profil verir."
  },
  {
    brand: "Byredo",
    name: "Bal d'Afrique",
    year: 2009,
    audience: "Unisex",
    family: "Amber Odunsu",
    accords: ["vetiver", "narenciye", "misk"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Bergamot", "Limon", "Neroli", "Tagetes"],
    heart: ["Menekşe", "Yasemin", "Siklamen"],
    base: ["Vetiver", "Misk", "Amber", "Sedir"],
    longevity: 3,
    projection: 3,
    color: "#e0bb58",
    cap: "#efefea",
    seasonNote: "Parlak narenciye ve temiz vetiver yapısı sıcak havada enerjik ve kuru kalır."
  },
  {
    brand: "Jo Malone",
    name: "Wood Sage & Sea Salt",
    year: 2014,
    audience: "Unisex",
    family: "Aromatik Akuatik",
    accords: ["deniz tuzu", "adaçayı", "mineral"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Ambrette tohumu"],
    heart: ["Deniz tuzu", "Mineral notalar"],
    base: ["Adaçayı", "Odunsu notalar"],
    longevity: 2,
    projection: 2,
    color: "#b7c5ba",
    cap: "#ded8ce",
    seasonNote: "Tuzlu mineral ferahlık yaz gündüzü için doğal ve hafif bir kullanım sağlar."
  },
  {
    brand: "Jo Malone",
    name: "Peony & Blush Suede",
    year: 2013,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["şakayık", "elma", "süet"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Kırmızı elma"],
    heart: ["Şakayık", "Yasemin", "Gül", "Karanfil"],
    base: ["Süet"],
    longevity: 3,
    projection: 2,
    color: "#e7a4b7",
    cap: "#ded8ce",
    seasonNote: "Şeffaf çiçek ve yumuşak süet dokusu bahar ve yaz davetleri için temiz kalır."
  },
  {
    brand: "Hermes",
    name: "Terre d'Hermes",
    year: 2006,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["portakal", "vetiver", "mineral"],
    seasons: ["Sonbahar", "İlkbahar", "Dört Mevsim"],
    top: ["Portakal", "Greyfurt"],
    heart: ["Biber", "Pelargonium", "Çakmak taşı hissi"],
    base: ["Vetiver", "Sedir", "Paçuli", "Benzoin"],
    longevity: 4,
    projection: 3,
    color: "#b86b32",
    cap: "#2e2b28",
    seasonNote: "Kuru vetiver ve mineral portakal dengesi özellikle ilkbahar-sonbahar gündüzlerinde güçlüdür."
  },
  {
    brand: "Hermes",
    name: "Un Jardin Sur Le Nil",
    year: 2005,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["yeşil mango", "lotus", "narenciye"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Yeşil mango", "Greyfurt", "Domates yaprağı", "Havuç"],
    heart: ["Lotus", "Portakal", "Şakayık", "Bulrush"],
    base: ["Tütsü", "Misk", "Tarçın", "Labdanum"],
    longevity: 3,
    projection: 3,
    color: "#a4c96e",
    cap: "#7b8c44",
    seasonNote: "Yeşil mango ve sulu narenciye sıcak havada canlı, ince ve ferah kalır."
  },
  {
    brand: "Viktor&Rolf",
    name: "Spicebomb Extreme",
    year: 2015,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["vanilya", "tütün", "baharat"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Lavanta", "Kimyon", "Karabiber"],
    heart: ["Tarçın", "Safran", "Kimyon"],
    base: ["Tütün", "Vanilya", "Bourbon viski hissi"],
    longevity: 5,
    projection: 5,
    color: "#7f5230",
    cap: "#191714",
    seasonNote: "Tatlı baharat ve tütün gücü kışa çok uygundur; kapalı alanda az sıkım yeterlidir."
  },
  {
    brand: "Viktor&Rolf",
    name: "Flowerbomb",
    year: 2005,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["beyaz çiçek", "paçuli", "tatlı"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Çay", "Bergamot", "Osmanthus"],
    heart: ["Orkide", "Yasemin", "Gül", "Frezya"],
    base: ["Paçuli", "Misk", "Vanilya"],
    longevity: 4,
    projection: 4,
    color: "#e2a0b4",
    cap: "#c9b7bc",
    seasonNote: "Yoğun çiçek ve tatlı paçuli serin bahar-sonbahar günlerinde daha dengeli açılır."
  },
  {
    brand: "Mugler",
    name: "Angel",
    year: 1992,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["gourmand", "paçuli", "çikolata"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Bergamot", "Hindistan cevizi", "Pamuk şeker", "Mandalina"],
    heart: ["Bal", "Kırmızı meyveler", "Kayısı", "Yasemin"],
    base: ["Paçuli", "Çikolata", "Karamel", "Vanilya"],
    longevity: 5,
    projection: 5,
    color: "#6d74be",
    cap: "#c8d2f0",
    seasonNote: "Gourmand paçuli ve karamel-çikolata gövdesi soğuk havada ikonik etkisini korur."
  },
  {
    brand: "Mugler",
    name: "Alien",
    year: 2005,
    audience: "Kadın",
    family: "Amber Odunsu",
    accords: ["yasemin", "amber", "odunsu"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Sambac yasemini"],
    heart: ["Kaşmir ağacı"],
    base: ["Beyaz amber"],
    longevity: 5,
    projection: 5,
    color: "#6846a6",
    cap: "#2d2044",
    seasonNote: "Yoğun yasemin-amber izi serin gecelerde etkileyici; sıcak havada çok baskın olabilir."
  },
  {
    brand: "Lancome",
    name: "La Vie Est Belle",
    year: 2012,
    audience: "Kadın",
    family: "Çiçeksi Gourmand",
    accords: ["pralin", "iris", "vanilya"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Frenk üzümü", "Armut"],
    heart: ["İris", "Yasemin", "Portakal çiçeği"],
    base: ["Pralin", "Vanilya", "Paçuli", "Tonka"],
    longevity: 5,
    projection: 5,
    color: "#d99bb5",
    cap: "#d8c5d0",
    seasonNote: "Tatlı pralin ve vanilya güçlü performans verir; soğuk havada daha konforlu taşınır."
  },
  {
    brand: "Guerlain",
    name: "Shalimar",
    year: 1925,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "tütsü", "deri"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Bergamot", "Limon", "Sedir"],
    heart: ["İris", "Yasemin", "Gül", "Paçuli"],
    base: ["Vanilya", "Tütsü", "Opoponax", "Deri"],
    longevity: 5,
    projection: 4,
    color: "#b89555",
    cap: "#1f2448",
    seasonNote: "Vanilya, reçine ve deri klasikleri soğuk havada derinleşir; resmi akşamlar için çok uygun."
  },
  {
    brand: "Guerlain",
    name: "Mon Guerlain",
    year: 2017,
    audience: "Kadın",
    family: "Amber Odunsu",
    accords: ["lavanta", "vanilya", "sandal"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Lavanta", "Bergamot"],
    heart: ["İris", "Yasemin sambac", "Gül"],
    base: ["Vanilya", "Sandal ağacı", "Tonka", "Benzoin"],
    longevity: 4,
    projection: 3,
    color: "#caa178",
    cap: "#5b4942",
    seasonNote: "Lavanta ve vanilya dengesi serin bahar-sonbahar havalarında zarif ve rahat durur."
  },
  {
    brand: "Narciso Rodriguez",
    name: "For Her",
    year: 2003,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["misk", "portakal çiçeği", "paçuli"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Portakal çiçeği", "Osmanthus", "Bergamot"],
    heart: ["Misk", "Amber"],
    base: ["Vetiver", "Paçuli", "Vanilya"],
    longevity: 4,
    projection: 3,
    color: "#d3a0aa",
    cap: "#1d1b1c",
    seasonNote: "Temiz misk yapısı mevsim geçişlerinde çok iyi; ofis ve günlük kullanımda yıl boyu taşınabilir."
  },
  {
    brand: "Gucci",
    name: "Bloom",
    year: 2017,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["tuberose", "yasemin", "yeşil"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Rangoon creeper"],
    heart: ["Tuberose", "Yasemin tomurcuğu"],
    base: ["Sandal ağacı", "Orris"],
    longevity: 4,
    projection: 3,
    color: "#d99a8e",
    cap: "#e7c7b5",
    seasonNote: "Canlı beyaz çiçek yoğunluğu bahar-yaz havasında doğal ve parlak açılır."
  },
  {
    brand: "Gucci",
    name: "Guilty Pour Homme",
    year: 2011,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["lavanta", "limon", "paçuli"],
    seasons: ["Dört Mevsim"],
    top: ["Lavanta", "Limon"],
    heart: ["Portakal çiçeği"],
    base: ["Sedir", "Paçuli", "Vanilya"],
    longevity: 3,
    projection: 3,
    color: "#a99567",
    cap: "#2c2922",
    seasonNote: "Temiz aromatik açılış ve yumuşak taban günlük kullanıma uygun, mevsim sınırı düşük bir profil verir."
  },
  {
    brand: "Versace",
    name: "Eros",
    year: 2012,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["nane", "vanilya", "tonka"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Nane", "Yeşil elma", "Limon"],
    heart: ["Tonka fasulyesi", "Ambroksan", "Geranium"],
    base: ["Vanilya", "Sedir", "Vetiver", "Meşe yosunu"],
    longevity: 5,
    projection: 5,
    color: "#2aa6a1",
    cap: "#d8bd67",
    seasonNote: "Vanilyalı tonka ve güçlü yayılım serin gece kullanımına daha uygun."
  },
  {
    brand: "Versace",
    name: "Bright Crystal",
    year: 2006,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["şakayık", "nar", "misk"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Yuzu", "Nar", "Buz akoru"],
    heart: ["Şakayık", "Lotus", "Manolya"],
    base: ["Misk", "Mahogany", "Amber"],
    longevity: 3,
    projection: 2,
    color: "#f0b9c8",
    cap: "#e1d7e7",
    seasonNote: "Sulu meyve ve hafif çiçek yapısı sıcak havada ferah ve zarif kalır."
  },
  {
    brand: "Dolce&Gabbana",
    name: "Light Blue",
    year: 2001,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["limon", "elma", "sedir"],
    seasons: ["Yaz"],
    top: ["Sicilya limonu", "Elma", "Sedir", "Çan çiçeği"],
    heart: ["Bambu", "Yasemin", "Beyaz gül"],
    base: ["Sedir", "Misk", "Amber"],
    longevity: 3,
    projection: 3,
    color: "#b6d5e2",
    cap: "#88aabc",
    seasonNote: "Limon-elma ferahlığı yaz gündüzünün klasik profilidir; sıcak havada keskinliğini korur."
  },
  {
    brand: "Dolce&Gabbana",
    name: "The One",
    year: 2008,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["tütün", "amber", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Greyfurt", "Kişniş", "Fesleğen"],
    heart: ["Kakule", "Zencefil", "Portakal çiçeği"],
    base: ["Amber", "Tütün", "Sedir"],
    longevity: 3,
    projection: 3,
    color: "#b9824a",
    cap: "#1d1a18",
    seasonNote: "Tütün-amber sıcaklığı yakın mesafe akşam kokusu gibi çalışır; serin hava performansını güzelleştirir."
  },
  {
    brand: "Paco Rabanne",
    name: "1 Million",
    year: 2008,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["tarçın", "deri", "amber"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Kan mandalinası", "Greyfurt", "Nane"],
    heart: ["Tarçın", "Gül", "Baharatlar"],
    base: ["Deri", "Amber", "Odunsu notalar", "Paçuli"],
    longevity: 5,
    projection: 5,
    color: "#d6a440",
    cap: "#6f5520",
    seasonNote: "Tatlı baharat ve deri yoğunluğu soğuk gece kullanımını hedefler; yaz için fazla güçlüdür."
  },
  {
    brand: "Paco Rabanne",
    name: "Invictus",
    year: 2013,
    audience: "Erkek",
    family: "Odunsu Akuatik",
    accords: ["deniz", "greyfurt", "ambergris"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Deniz notaları", "Greyfurt", "Mandalina"],
    heart: ["Defne yaprağı", "Yasemin"],
    base: ["Ambergris", "Guaiac ağacı", "Meşe yosunu", "Paçuli"],
    longevity: 4,
    projection: 4,
    color: "#aacdd9",
    cap: "#d0d7dd",
    seasonNote: "Tatlı akuatik enerji yaz ve spor sonrası kullanımlara çok uygundur."
  },
  {
    brand: "Carolina Herrera",
    name: "Good Girl",
    year: 2016,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["tuberose", "tonka", "kakao"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Badem", "Kahve", "Bergamot", "Limon"],
    heart: ["Tuberose", "Yasemin sambac", "Portakal çiçeği"],
    base: ["Tonka", "Kakao", "Vanilya", "Sandal"],
    longevity: 5,
    projection: 4,
    color: "#28335f",
    cap: "#d4b057",
    seasonNote: "Kakao-tonka ve beyaz çiçek karışımı gece ve serin havada daha dengeli durur."
  },
  {
    brand: "Carolina Herrera",
    name: "Bad Boy",
    year: 2019,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["kakao", "tonka", "biber"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Beyaz biber", "Pembe biber", "Bergamot"],
    heart: ["Sedir", "Adaçayı"],
    base: ["Tonka fasulyesi", "Kakao", "Amberwood"],
    longevity: 4,
    projection: 4,
    color: "#2d3840",
    cap: "#171a1b",
    seasonNote: "Tatlı tonka-kakao tabanı serin hava akşamlarına daha çok yakışır."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Male",
    year: 1995,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["lavanta", "nane", "vanilya"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Lavanta", "Nane", "Kakule", "Bergamot"],
    heart: ["Tarçın", "Kimyon", "Portakal çiçeği"],
    base: ["Vanilya", "Tonka", "Sandal", "Sedir"],
    longevity: 4,
    projection: 4,
    color: "#8cc1d4",
    cap: "#58616a",
    seasonNote: "Lavanta-nane ferahlığı ve vanilya sıcaklığı arasında kurduğu dengeyle özellikle serin havada ikonikleşir."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Scandal",
    year: 2017,
    audience: "Kadın",
    family: "Chypre Çiçeksi",
    accords: ["bal", "gardenya", "paçuli"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kan portakalı", "Mandalina"],
    heart: ["Bal", "Gardenya", "Portakal çiçeği", "Yasemin"],
    base: ["Paçuli", "Balmumu", "Karamel", "Meyan"],
    longevity: 5,
    projection: 5,
    color: "#e8a5a2",
    cap: "#d9bfb8",
    seasonNote: "Bal ve karamel yoğunluğu soğuk havada daha konforlu; yaz sıcağında çok tatlılaşır."
  },
  {
    brand: "Initio",
    name: "Oud for Greatness",
    year: 2018,
    audience: "Unisex",
    family: "Odunsu Baharatlı",
    accords: ["oud", "safran", "lavanta"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Safran", "Muskat", "Lavanta"],
    heart: ["Oud"],
    base: ["Paçuli", "Misk"],
    longevity: 5,
    projection: 5,
    color: "#1d1d21",
    cap: "#c39c49",
    seasonNote: "Güçlü oud ve safran profili soğuk havada ihtişamlı; kapalı alanda az kullanım ister."
  },
  {
    brand: "Parfums de Marly",
    name: "Layton",
    year: 2016,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["elma", "vanilya", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Elma", "Lavanta", "Bergamot", "Mandalina"],
    heart: ["Geranium", "Menekşe", "Yasemin"],
    base: ["Vanilya", "Kakule", "Sandal", "Biber"],
    longevity: 5,
    projection: 4,
    color: "#34436f",
    cap: "#c7b06c",
    seasonNote: "Meyveli-vanilyalı sıcaklığı ve baharatlı tabanı serin günlerde daha tok açılır."
  },
  {
    brand: "Parfums de Marly",
    name: "Delina",
    year: 2017,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["gül", "lychee", "vanilya"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Lychee", "Ravent", "Bergamot", "Muskat"],
    heart: ["Türk gülü", "Şakayık", "Müge", "Petalia"],
    base: ["Vanilya", "Misk", "Cashmeran", "Tütsü"],
    longevity: 5,
    projection: 4,
    color: "#e7a0b0",
    cap: "#d9c9bd",
    seasonNote: "Parlak meyveli gül karakteri bahar-yaz davetlerinde dikkat çekici ve canlı durur."
  },
  {
    brand: "Xerjoff",
    name: "Naxos",
    year: 2015,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["bal", "tütün", "lavanta"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot", "Limon", "Lavanta"],
    heart: ["Bal", "Tarçın", "Kaşmir", "Yasemin"],
    base: ["Tütün yaprağı", "Vanilya", "Tonka"],
    longevity: 5,
    projection: 4,
    color: "#ead3a1",
    cap: "#a38142",
    seasonNote: "Bal-tütün ve lavanta dengesi serin havada zengin ama temiz bir sıcaklık verir."
  },
  {
    brand: "Nishane",
    name: "Hacivat",
    year: 2017,
    audience: "Unisex",
    family: "Chypre",
    accords: ["ananas", "meşe yosunu", "odunsu"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Ananas", "Greyfurt", "Bergamot"],
    heart: ["Sedir", "Yasemin", "Paçuli"],
    base: ["Meşe yosunu", "Odunsu notalar"],
    longevity: 5,
    projection: 5,
    color: "#9daa76",
    cap: "#2d321f",
    seasonNote: "Meyveli chypre ferahlığı sıcak havada güçlü kalır; performansı sayesinde serin havaya da uzanır."
  },
  {
    brand: "Nishane",
    name: "Ani",
    year: 2019,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["vanilya", "zencefil", "sandal"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Zencefil", "Bergamot", "Yeşil notalar", "Pembe biber"],
    heart: ["Frenk üzümü", "Türk gülü", "Kakule"],
    base: ["Vanilya", "Sandal", "Sedir", "Ambergris"],
    longevity: 5,
    projection: 4,
    color: "#c98d4f",
    cap: "#32231c",
    seasonNote: "Baharatlı vanilya yapısı soğuk havada kremsi ve kalıcı bir etki verir."
  },
  {
    brand: "Amouage",
    name: "Reflection Man",
    year: 2007,
    audience: "Erkek",
    family: "Odunsu Çiçeksi Misk",
    accords: ["beyaz çiçek", "sandal", "neroli"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Biberiye", "Pembe biber", "Petitgrain"],
    heart: ["Neroli", "Orris", "Yasemin", "Ylang-ylang"],
    base: ["Sandal ağacı", "Vetiver", "Sedir", "Paçuli"],
    longevity: 4,
    projection: 3,
    color: "#e5dfd4",
    cap: "#c5c0b6",
    seasonNote: "Temiz beyaz çiçek ve sandal yapısı bahar-yaz resmi kullanımında çok rafine durur."
  },
  {
    brand: "Amouage",
    name: "Interlude Man",
    year: 2012,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["tütsü", "amber", "oud"],
    seasons: ["Kış"],
    top: ["Bergamot", "Kekik", "Kırmızı biber"],
    heart: ["Tütsü", "Opoponax", "Amber", "Labdanum"],
    base: ["Oud", "Deri", "Sandal", "Paçuli"],
    longevity: 5,
    projection: 5,
    color: "#2d425b",
    cap: "#b38c48",
    seasonNote: "Yoğun tütsü, reçine ve oud kış parfümüdür; sıcak havada çok ağırlaşır."
  },
  {
    brand: "Kilian",
    name: "Angels' Share",
    year: 2020,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["konyak", "tarçın", "pralin"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Konyak"],
    heart: ["Tarçın", "Tonka", "Meşe"],
    base: ["Pralin", "Vanilya", "Sandal"],
    longevity: 5,
    projection: 4,
    color: "#c5823d",
    cap: "#b88946",
    seasonNote: "Konyak, tarçın ve pralin birleşimi soğuk havada sıcak ve lüks bir iz bırakır."
  },
  {
    brand: "Kilian",
    name: "Love Don't Be Shy",
    year: 2007,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["marshmallow", "portakal çiçeği", "vanilya"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Neroli", "Bergamot", "Pembe biber", "Kişniş"],
    heart: ["Portakal çiçeği", "Yasemin", "Hanımeli", "Gül"],
    base: ["Marshmallow", "Vanilya", "Karamel", "Şeker"],
    longevity: 4,
    projection: 4,
    color: "#efb1a0",
    cap: "#b98b80",
    seasonNote: "Şekerli marshmallow ve beyaz çiçek tatlılığı serin havada daha konforlu açılır."
  },
  {
    brand: "Escentric Molecules",
    name: "Molecule 01",
    year: 2006,
    audience: "Unisex",
    family: "Odunsu Misk",
    accords: ["Iso E Super", "ten kokusu", "odunsu"],
    seasons: ["Dört Mevsim"],
    top: ["Iso E Super"],
    heart: ["Iso E Super"],
    base: ["Iso E Super"],
    longevity: 4,
    projection: 2,
    color: "#c5c3b7",
    cap: "#343434",
    seasonNote: "Minimal odunsu molekül profili sıcak ve soğuk havada tene yakın, temiz bir imza verir."
  },
  {
    brand: "Juliette Has A Gun",
    name: "Not A Perfume",
    year: 2010,
    audience: "Unisex",
    family: "Amber Misk",
    accords: ["cetalox", "temiz", "misk"],
    seasons: ["Dört Mevsim"],
    top: ["Cetalox"],
    heart: ["Cetalox"],
    base: ["Cetalox"],
    longevity: 4,
    projection: 2,
    color: "#f2efe9",
    cap: "#e1ded6",
    seasonNote: "Tek molekül temizliği ofis ve günlük kullanımda yıl boyu sorunsuz çalışır."
  },
  {
    brand: "Burberry",
    name: "Her",
    year: 2018,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["çilek", "misk", "amber"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Çilek", "Ahududu", "Böğürtlen", "Frenk üzümü"],
    heart: ["Menekşe", "Yasemin"],
    base: ["Misk", "Vanilya", "Cashmeran", "Amber"],
    longevity: 4,
    projection: 4,
    color: "#e7a4b0",
    cap: "#e2d5cc",
    seasonNote: "Kırmızı meyveli ve miskli parlaklığı bahar-yaz gündüzlerinde canlıdır."
  },
  {
    brand: "Burberry",
    name: "London for Men",
    year: 2006,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["tarçın", "tütün", "deri"],
    seasons: ["Kış"],
    top: ["Lavanta", "Bergamot", "Tarçın"],
    heart: ["Mimoza", "Deri"],
    base: ["Tütün yaprağı", "Guaiac ağacı", "Opoponax"],
    longevity: 4,
    projection: 3,
    color: "#9b6d45",
    cap: "#33302b",
    seasonNote: "Tarçın ve tütün hissi kış ayları için rahat, sıcak ve nostaljik bir karakter verir."
  },
  {
    brand: "Maison Margiela",
    name: "Replica By the Fireplace",
    year: 2015,
    audience: "Unisex",
    family: "Odunsu Amber",
    accords: ["duman", "kestane", "vanilya"],
    seasons: ["Kış"],
    top: ["Karanfil", "Pembe biber", "Portakal çiçeği"],
    heart: ["Kestane", "Guaiac ağacı", "Ardıç"],
    base: ["Vanilya", "Peru balsamı", "Cashmeran"],
    longevity: 4,
    projection: 4,
    color: "#b46337",
    cap: "#efe9dc",
    seasonNote: "Dumanlı kestane ve vanilya etkisi soğuk kış günlerinde en iyi halini gösterir."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Lazy Sunday Morning",
    year: 2013,
    audience: "Unisex",
    family: "Çiçeksi Odunsu Misk",
    accords: ["temiz çamaşır", "misk", "iris"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Armut", "Müge", "Aldehitler"],
    heart: ["İris", "Gül", "Portakal çiçeği"],
    base: ["Beyaz misk", "Paçuli", "Ambrette"],
    longevity: 3,
    projection: 2,
    color: "#f2eee5",
    cap: "#efe9dc",
    seasonNote: "Temiz çarşaf ve beyaz misk hissi sıcak havada ferah, kapalı alanda nazik kalır."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Beach Walk",
    year: 2012,
    audience: "Unisex",
    family: "Çiçeksi Meyveli",
    accords: ["hindistan cevizi", "güneş kremi", "narenciye"],
    seasons: ["Yaz"],
    top: ["Limon", "Pembe biber", "Bergamot"],
    heart: ["Ylang-ylang", "Hindistan cevizi sütü", "Heliotrope"],
    base: ["Misk", "Sedir", "Benzoin"],
    longevity: 3,
    projection: 3,
    color: "#e7cb92",
    cap: "#efe9dc",
    seasonNote: "Kumsal, güneş kremi ve hindistan cevizi çağrışımı açık biçimde yaz kullanımına yöneliktir."
  },
  {
    brand: "Aesop",
    name: "Tacit",
    year: 2015,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["yuzu", "fesleğen", "vetiver"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Yuzu", "Fesleğen grand vert", "Karanfil"],
    heart: ["Biberiye", "Nane", "Rezene"],
    base: ["Vetiver", "Amber", "Sedir"],
    longevity: 3,
    projection: 3,
    color: "#c5d08b",
    cap: "#4b5136",
    seasonNote: "Yeşil narenciye ve aromatik otlar sıcak havada kuru ve rafine kalır."
  },
  {
    brand: "Aesop",
    name: "Hwyl",
    year: 2017,
    audience: "Unisex",
    family: "Odunsu Aromatik",
    accords: ["selvi", "tütsü", "vetiver"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kekik", "Elemi", "Pembe biber"],
    heart: ["Selvi", "Tütsü", "Olibanum"],
    base: ["Vetiver", "Sedir", "Meşe yosunu"],
    longevity: 4,
    projection: 3,
    color: "#586849",
    cap: "#2f3529",
    seasonNote: "Kuru orman, tütsü ve vetiver hissi serin havada sakin ve derin durur."
  },
  {
    brand: "Bvlgari",
    name: "Aqva Pour Homme",
    year: 2005,
    audience: "Erkek",
    family: "Aromatik Akuatik",
    accords: ["deniz yosunu", "mandalina", "odunsu"],
    seasons: ["Yaz"],
    top: ["Mandalina", "Portakal", "Petitgrain"],
    heart: ["Deniz yosunu", "Lavanta", "Pamuk çiçeği"],
    base: ["Sedir", "Paçuli", "Amber", "Adaçayı"],
    longevity: 3,
    projection: 3,
    color: "#4fa4a4",
    cap: "#3a5354",
    seasonNote: "Tuzlu deniz yosunu ve narenciye karakteri yaz gündüzüne doğrudan oturur."
  },
  {
    brand: "Prada",
    name: "L'Homme",
    year: 2016,
    audience: "Erkek",
    family: "Odunsu Çiçeksi Misk",
    accords: ["iris", "amber", "sabunsu"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Neroli", "Karabiber", "Kakule"],
    heart: ["İris", "Amber", "Menekşe", "Geranium"],
    base: ["Paçuli", "Sedir", "Sandal"],
    longevity: 4,
    projection: 3,
    color: "#d3d0c5",
    cap: "#9b958b",
    seasonNote: "Sabunsu iris ve amber temizliği ofis için dört mevsim uygun; en parlak hali baharda çıkar."
  },
  {
    brand: "Prada",
    name: "Candy",
    year: 2011,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["karamel", "benzoin", "pudralı"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Karamel"],
    heart: ["Pudralı notalar", "Misk"],
    base: ["Benzoin", "Vanilya"],
    longevity: 4,
    projection: 3,
    color: "#f0a65b",
    cap: "#d14470",
    seasonNote: "Karamel ve benzoin sıcaklığı soğuk havada yumuşak ve tatlı bir imza verir."
  },
  {
    brand: "Givenchy",
    name: "L'Interdit",
    year: 2018,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["tuberose", "portakal çiçeği", "paçuli"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Armut", "Bergamot"],
    heart: ["Tuberose", "Portakal çiçeği", "Yasemin sambac"],
    base: ["Paçuli", "Vetiver", "Ambroksan", "Vanilya"],
    longevity: 5,
    projection: 4,
    color: "#d69aa3",
    cap: "#2b2526",
    seasonNote: "Beyaz çiçek ve koyu paçuli birleşimi serin akşam kullanımlarında daha etkileyicidir."
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma",
    year: 2019,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["mineral", "adaçayı", "vetiver"],
    seasons: ["İlkbahar", "Sonbahar", "Dört Mevsim"],
    top: ["Mineral tuz", "Menekşe yaprağı"],
    heart: ["Zencefil", "Adaçayı"],
    base: ["Vetiver", "Odunsu notalar"],
    longevity: 4,
    projection: 3,
    color: "#8b8b82",
    cap: "#202020",
    seasonNote: "Mineral ferahlık ve vetiver tabanı günlük dört mevsim kullanıma yatkın; geçiş mevsimlerinde daha net."
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma",
    year: 2019,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["yasemin", "vanilya", "frenk üzümü"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Frenk üzümü", "Bergamot", "Pembe biber"],
    heart: ["Yasemin", "Yasemin sambac", "Yasemin çayı"],
    base: ["Bourbon vanilya", "Kaşmir ağacı", "Guaiac"],
    longevity: 4,
    projection: 4,
    color: "#d98fa3",
    cap: "#202020",
    seasonNote: "Meyveli yasemin ve vanilya dengesi ılık-serin havada modern ve parlak durur."
  },
  {
    brand: "Montale",
    name: "Intense Cafe",
    year: 2013,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["kahve", "gül", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Çiçeksi notalar"],
    heart: ["Gül", "Kahve"],
    base: ["Vanilya", "Beyaz misk", "Amber"],
    longevity: 5,
    projection: 5,
    color: "#8b4764",
    cap: "#c4a358",
    seasonNote: "Kahve, gül ve vanilya yoğunluğu soğuk havada daha yuvarlak ve kalıcı bir iz verir."
  },
  {
    brand: "Mancera",
    name: "Cedrat Boise",
    year: 2011,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["limon", "deri", "odunsu"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Sicilya limonu", "Frenk üzümü", "Baharatlar", "Bergamot"],
    heart: ["Meyveli notalar", "Paçuli yaprağı", "Su yasemini"],
    base: ["Sedir", "Deri", "Sandal", "Vanilya"],
    longevity: 5,
    projection: 4,
    color: "#d7b85f",
    cap: "#232320",
    seasonNote: "Parlak narenciye ve derimsi odunsuluk performansı yüksek, sıcak havada da dayanıklı bir profil oluşturur."
  },
  {
    brand: "Frederic Malle",
    name: "Portrait of a Lady",
    year: 2010,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["gül", "paçuli", "tütsü"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Gül", "Karanfil", "Ahududu", "Frenk üzümü"],
    heart: ["Paçuli", "Tütsü", "Sandal"],
    base: ["Misk", "Benzoin", "Amber"],
    longevity: 5,
    projection: 5,
    color: "#8f3342",
    cap: "#2a1d1f",
    seasonNote: "Koyu gül, paçuli ve tütsü ihtişamı soğuk hava ve resmi akşam kokusu karakteri taşır."
  },
  {
    brand: "Frederic Malle",
    name: "Musc Ravageur",
    year: 2000,
    audience: "Unisex",
    family: "Amber",
    accords: ["misk", "tarçın", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Bergamot", "Mandalina", "Lavanta"],
    heart: ["Tarçın", "Karanfil"],
    base: ["Misk", "Vanilya", "Tonka", "Sandal"],
    longevity: 5,
    projection: 4,
    color: "#9b6f55",
    cap: "#25211e",
    seasonNote: "Baharatlı misk ve vanilya sıcaklığı serin havada daha yumuşak, daha lüks hissedilir."
  },
  {
    brand: "Diptyque",
    name: "Philosykos",
    year: 1996,
    audience: "Unisex",
    family: "Odunsu Aromatik",
    accords: ["incir", "yeşil", "hindistan cevizi"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["İncir yaprağı", "İncir"],
    heart: ["Hindistan cevizi", "Yeşil notalar"],
    base: ["Sedir", "İncir ağacı", "Odunsu notalar"],
    longevity: 3,
    projection: 3,
    color: "#819a5f",
    cap: "#2f3a25",
    seasonNote: "Yeşil incir yaprağı ve kremsi odunsuluk yaz-bahar günlerinde doğal ve sakin durur."
  }
];

const elitePerfumes = [
  {
    brand: "Parfums de Marly",
    name: "Althair",
    year: 2023,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["vanilya", "pralin", "portakal çiçeği"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot", "Mandalina", "Elemi"],
    heart: ["Portakal çiçeği", "Tarçın", "Kakule"],
    base: ["Bourbon vanilya", "Guaiac ağacı", "Pralin"],
    longevity: 5,
    projection: 4,
    color: "#b87942",
    cap: "#2a211b",
    outfits: ["Kaşe kaban", "süet ceket", "koyu triko", "akşam takım elbisesi"],
    occasions: ["Lüks akşam yemeği", "kış daveti", "özel buluşma", "premium lounge"],
    seasonNote: "Vanilya, pralin ve portakal çiçeği dengesi soğuk havada çok şık ve karizmatik açılır."
  },
  {
    brand: "Parfums de Marly",
    name: "Haltane",
    year: 2021,
    audience: "Erkek",
    family: "Odunsu Amber",
    accords: ["oud", "safran", "pralin"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Adaçayı", "Lavanta", "Bergamot"],
    heart: ["Safran", "Pralin", "Sedir"],
    base: ["Oud", "Agar ağacı", "Paçuli"],
    longevity: 5,
    projection: 5,
    color: "#5a4a32",
    cap: "#1d1812",
    outfits: ["Siyah takım", "deri bot", "yün palto", "minimal lüks kombin"],
    occasions: ["Gala", "resmi davet", "gece etkinliği", "soğuk hava buluşması"],
    seasonNote: "Safranlı oud ve pralin dokusu kış gecelerinde güçlü, zengin ve elit bir iz bırakır."
  },
  {
    brand: "Parfums de Marly",
    name: "Herod",
    year: 2012,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["tütün", "vanilya", "tarçın"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Biber"],
    heart: ["Tütün yaprağı", "Tütsü", "Osmanthus"],
    base: ["Vanilya", "Misk", "Sedir", "Vetiver"],
    longevity: 5,
    projection: 4,
    color: "#754a32",
    cap: "#261d19",
    seasonNote: "Tütün ve vanilya yapısı kalın kumaşlar, gece ve soğuk hava için çok uyumludur."
  },
  {
    brand: "Parfums de Marly",
    name: "Pegasus",
    year: 2011,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["badem", "vanilya", "lavanta"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Heliotrope", "Kimyon", "Bergamot"],
    heart: ["Acı badem", "Lavanta", "Yasemin"],
    base: ["Vanilya", "Sandal", "Amber"],
    longevity: 5,
    projection: 4,
    color: "#b7a4a0",
    cap: "#2a2a2a",
    seasonNote: "Metallic badem ve vanilya etkisi serin havada modern ve kolay fark edilir durur."
  },
  {
    brand: "Parfums de Marly",
    name: "Delina Exclusif",
    year: 2018,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["gül", "lychee", "vanilya"],
    seasons: ["İlkbahar", "Sonbahar", "Kış"],
    top: ["Lychee", "Armut", "Bergamot"],
    heart: ["Türk gülü", "Tütsü", "Oud"],
    base: ["Vanilya", "Amber", "Odunsu notalar"],
    longevity: 5,
    projection: 4,
    color: "#d7879a",
    cap: "#d9c9bd",
    outfits: ["Saten elbise", "krem blazer", "inci takılar", "topuklu ayakkabı"],
    occasions: ["Düğün", "romantik akşam", "özel davet", "fine dining"],
    seasonNote: "Yoğun gül, lychee ve vanilya imzası serin havada çok zarif ve kalıcıdır."
  },
  {
    brand: "Parfums de Marly",
    name: "Valaya",
    year: 2023,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["beyaz misk", "şeftali", "portakal çiçeği"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Aldehitler", "Bergamot", "Mandalina"],
    heart: ["Portakal çiçeği", "Müge", "Şeftali"],
    base: ["Misk", "Ambroksan", "Akigalawood"],
    longevity: 4,
    projection: 3,
    color: "#eee6dc",
    cap: "#d9c9bd",
    seasonNote: "Temiz beyaz misk ve parlak çiçekler gündüz, ofis ve şık yaz kombinlerine çok yakışır."
  },
  {
    brand: "Parfums de Marly",
    name: "Oriana",
    year: 2021,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["marshmallow", "portakal çiçeği", "krem"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Mandalina", "Bergamot", "Greyfurt"],
    heart: ["Portakal çiçeği", "Ahududu", "Frenk üzümü"],
    base: ["Marshmallow", "Krema", "Misk", "Ambrette"],
    longevity: 4,
    projection: 4,
    color: "#efadc1",
    cap: "#d9c9bd",
    seasonNote: "Tatlı kremamsı yapı pastel ve romantik kombinlerle özellikle serin havada iyi çalışır."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Grand Soir",
    year: 2016,
    audience: "Erkek",
    family: "Amber",
    accords: ["amber", "benzoin", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Labdanum"],
    heart: ["Benzoin", "Tonka fasulyesi"],
    base: ["Vanilya", "Amber"],
    longevity: 5,
    projection: 4,
    color: "#c48d40",
    cap: "#2a2117",
    outfits: ["Siyah smokin", "yün palto", "kaşmir kazak", "deri loafer"],
    occasions: ["Gala", "resmi akşam", "lüks otel lobisi", "özel kutlama"],
    seasonNote: "Reçineli amber ve vanilya sıcaklığı soğuk hava akşamlarında son derece rafine durur."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Gentle Fluidity Silver",
    year: 2019,
    audience: "Erkek",
    family: "Aromatik Baharatlı",
    accords: ["ardıç", "muskat", "amberwood"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Ardıç meyvesi", "Muskat"],
    heart: ["Kişniş", "Amberwood"],
    base: ["Misk", "Vanilya"],
    longevity: 4,
    projection: 3,
    color: "#cfd6d6",
    cap: "#b9bfc0",
    outfits: ["Lacivert blazer", "beyaz gömlek", "akıllı casual", "temiz sneaker"],
    occasions: ["Ofis", "iş toplantısı", "yaz akşamı", "şehir içi günlük kullanım"],
    seasonNote: "Ardıç ve amberwood yapısı temiz, modern ve dört mevsime yakın bir kullanım sağlar."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "L'Homme A la Rose",
    year: 2020,
    audience: "Erkek",
    family: "Çiçeksi Odunsu",
    accords: ["gül", "greyfurt", "amberwood"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Greyfurt", "Adaçayı"],
    heart: ["Damascena gülü", "Centifolia gülü"],
    base: ["Amberwood", "Cistus"],
    longevity: 4,
    projection: 3,
    color: "#d9919a",
    cap: "#2b2b2b",
    seasonNote: "Erkek gül yorumunu ferah ve modern tutar; bahar-yaz şık gündüz kullanımlarına uygundur."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "724",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["temiz misk", "aldehit", "beyaz çiçek"],
    seasons: ["Dört Mevsim", "İlkbahar", "Yaz"],
    top: ["Aldehitler", "Bergamot"],
    heart: ["Yasemin", "Bezelye çiçeği", "Seringat"],
    base: ["Beyaz misk", "Sandal"],
    longevity: 4,
    projection: 3,
    color: "#e4edf0",
    cap: "#c2ccd1",
    outfits: ["Beyaz gömlek", "minimal blazer", "ipek bluz", "temiz kesimli elbise"],
    occasions: ["Ofis", "şehir günü", "brunch", "galeri gezisi"],
    seasonNote: "Temiz şehir kokusu hissi verir; günlük şık kombinlerde dört mevsim rahat taşınır."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Amyris Femme",
    year: 2012,
    audience: "Kadın",
    family: "Çiçeksi Odunsu Misk",
    accords: ["iris", "limon çiçeği", "amyris"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Limon çiçeği", "Portakal"],
    heart: ["Amyris", "İris"],
    base: ["Vetiver", "Misk", "Amber"],
    longevity: 4,
    projection: 3,
    color: "#f0d9ab",
    cap: "#c4aa69",
    seasonNote: "Parlak ve zarif çiçek-odun yapısı gündüz şıklığına çok iyi eşlik eder."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Gentle Fluidity Gold",
    year: 2019,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "kişniş", "misk"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Ardıç meyvesi", "Muskat"],
    heart: ["Kişniş", "Misk"],
    base: ["Vanilya", "Amberwood"],
    longevity: 5,
    projection: 4,
    color: "#d8b465",
    cap: "#b99648",
    seasonNote: "Vanilya ve amberwood dokusu serin havada ipeksi, sıcak ve zarif bir iz bırakır."
  },
  {
    brand: "Xerjoff",
    name: "Alexandria II",
    year: 2012,
    audience: "Erkek",
    family: "Odunsu Amber",
    accords: ["oud", "lavanta", "sandal"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Lavanta", "Gül ağacı", "Tarçın", "Elma"],
    heart: ["Sedir", "Müge", "Gül"],
    base: ["Oud", "Sandal", "Amber", "Vanilya"],
    longevity: 5,
    projection: 5,
    color: "#8d6040",
    cap: "#c39c49",
    seasonNote: "Oud ve sandal yapısı kalın kumaşlar, resmi davetler ve kış geceleri için güçlü bir elit imza verir."
  },
  {
    brand: "Xerjoff",
    name: "Erba Pura",
    year: 2019,
    audience: "Kadın",
    family: "Amber Meyveli",
    accords: ["meyveli", "misk", "vanilya"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Portakal", "Limon", "Bergamot"],
    heart: ["Akdeniz meyveleri"],
    base: ["Beyaz misk", "Amber", "Vanilya"],
    longevity: 5,
    projection: 5,
    color: "#efb056",
    cap: "#c39c49",
    seasonNote: "Meyveli amber-misk profili çok güçlüdür; yaz akşamı ve dikkat çekici kombinlerde iyi çalışır."
  },
  {
    brand: "Initio",
    name: "Side Effect",
    year: 2016,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["rom", "tütün", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Rom"],
    heart: ["Tütün", "Tarçın"],
    base: ["Vanilya", "Sandal"],
    longevity: 5,
    projection: 5,
    color: "#8a4638",
    cap: "#191513",
    outfits: ["Siyah deri ceket", "kadife blazer", "koyu gömlek", "akşam botu"],
    occasions: ["Gece kulübü", "özel buluşma", "kokteyl bar", "kış gecesi"],
    seasonNote: "Rom, tütün ve vanilya üçlüsü soğuk gece ortamlarında çok iddialı ve kalıcıdır."
  },
  {
    brand: "Initio",
    name: "Atomic Rose",
    year: 2019,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["gül", "vanilya", "pembe biber"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Pembe biber", "Bergamot", "Hedione"],
    heart: ["Bulgar gülü", "Türk gülü", "Mısır yasemini"],
    base: ["Vanilya", "Amber"],
    longevity: 5,
    projection: 5,
    color: "#bb5260",
    cap: "#1b1718",
    seasonNote: "Patlayıcı gül ve amber etkisi özel davetlerde güçlü, elit ve dikkat çekici bir imza verir."
  },
  {
    brand: "Amouage",
    name: "Guidance",
    year: 2023,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["armut", "tütsü", "sandal"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Armut", "Fındık", "Olibanum"],
    heart: ["Safran", "Gül", "Yasemin"],
    base: ["Sandal", "Vanilya", "Ambergris"],
    longevity: 5,
    projection: 5,
    color: "#d5b56f",
    cap: "#b38c48",
    outfits: ["İpek elbise", "altın takı", "krem palto", "topuklu çizme"],
    occasions: ["Lüks davet", "düğün", "akşam yemeği", "özel kutlama"],
    seasonNote: "Armut, tütsü ve sandal birleşimi serin havada modern ve çok lüks hissedilir."
  },
  {
    brand: "Roja Parfums",
    name: "Elysium Pour Homme",
    year: 2017,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["greyfurt", "vetiver", "ambergris"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Greyfurt", "Limon", "Bergamot", "Lime"],
    heart: ["Elma", "Frenk üzümü", "Yasemin", "Gül"],
    base: ["Vetiver", "Sedir", "Ambergris", "Deri"],
    longevity: 4,
    projection: 4,
    color: "#62a3b8",
    cap: "#1c2d35",
    seasonNote: "Parlak narenciye ve rafine vetiver profili yazlık şık erkek kokusu olarak çok güçlüdür."
  },
  {
    brand: "Roja Parfums",
    name: "Elixir Pour Femme",
    year: 2019,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["şeftali", "gül", "vanilya"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Bergamot"],
    heart: ["Gül", "Yasemin", "Menekşe", "Ahududu"],
    base: ["Vanilya", "Sandal", "Misk", "Sedir"],
    longevity: 4,
    projection: 4,
    color: "#ef9aaa",
    cap: "#d5b46b",
    seasonNote: "Meyveli-çiçeksi lüks yapı açık renk elbiseler ve özel gündüz davetleriyle uyumludur."
  },
  {
    brand: "Penhaligon's",
    name: "Halfeti",
    year: 2015,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["gül", "oud", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Greyfurt", "Bergamot", "Yeşil notalar", "Artemisia"],
    heart: ["Gül", "Kakule", "Kimyon", "Muskat"],
    base: ["Oud", "Deri", "Sedir", "Sandal"],
    longevity: 5,
    projection: 4,
    color: "#3d4a36",
    cap: "#b98b42",
    seasonNote: "Baharatlı gül ve oud havası serin havada koyu, rafine ve farklı bir karakter sunar."
  },
  {
    brand: "Penhaligon's",
    name: "The Favourite",
    year: 2020,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["mimoza", "iris", "misk"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Mimoza", "Frezya", "Menekşe"],
    heart: ["İris", "Yasemin", "Sambac yasemini"],
    base: ["Misk", "Sandal", "Ambroksan"],
    longevity: 4,
    projection: 3,
    color: "#f0c8d0",
    cap: "#d7b887",
    seasonNote: "Pudralı ve zarif çiçek profili ofis, brunch ve gündüz şıklığı için çok uygundur."
  },
  {
    brand: "Ex Nihilo",
    name: "Blue Talisman",
    year: 2023,
    audience: "Erkek",
    family: "Amber Meyveli",
    accords: ["armut", "amber", "misk"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Armut", "Bergamot", "Mandalina", "Zencefil"],
    heart: ["Portakal çiçeği", "Georgywood"],
    base: ["Amber", "Misk", "Akigalawood"],
    longevity: 5,
    projection: 4,
    color: "#5a7ea8",
    cap: "#d7b887",
    seasonNote: "Meyveli amber-misk yapısı şehirli, modern ve pahalı kokan bir günlük imza verir."
  },
  {
    brand: "Ex Nihilo",
    name: "Fleur Narcotique",
    year: 2014,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["lychee", "şakayık", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Lychee", "Bergamot", "Şeftali"],
    heart: ["Şakayık", "Yasemin", "Portakal çiçeği"],
    base: ["Misk", "Yosun", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    color: "#f0a9bb",
    cap: "#d7b887",
    seasonNote: "Şık meyveli-çiçeksi profil davet, brunch ve yaz akşamı kombinleriyle iyi eşleşir."
  },
  {
    brand: "BDK Parfums",
    name: "Gris Charnel",
    year: 2019,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["incir", "çay", "sandal"],
    seasons: ["Sonbahar", "Kış"],
    top: ["İncir", "Siyah çay", "Kakule"],
    heart: ["İris", "Bourbon vetiver"],
    base: ["Sandal", "Tonka"],
    longevity: 4,
    projection: 3,
    color: "#8a8176",
    cap: "#1f1f1f",
    seasonNote: "Çay, incir ve sandal karışımı kaşmir, triko ve şehirli sonbahar kombinleriyle harika gider."
  },
  {
    brand: "BDK Parfums",
    name: "Pas Ce Soir",
    year: 2016,
    audience: "Kadın",
    family: "Chypre Meyveli",
    accords: ["ayva", "zencefil", "paçuli"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Zencefil", "Mandalina", "Karabiber"],
    heart: ["Ayva", "Portakal çiçeği", "Yasemin"],
    base: ["Paçuli", "Kaşmir", "Amberwood"],
    longevity: 4,
    projection: 4,
    color: "#d98a78",
    cap: "#242424",
    seasonNote: "Meyveli chypre enerjisi renkli ama şık kombinlerde özellikle geçiş mevsimlerine yakışır."
  }
];

const designerEssentials = [
  {
    brand: "Versace",
    name: "Crystal Noir",
    year: 2004,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["hindistan cevizi", "gardenya", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Biber", "Zencefil", "Kakule"],
    heart: ["Gardenya", "Portakal çiçeği", "Şakayık", "Hindistan cevizi"],
    base: ["Sandal", "Misk", "Amber"],
    longevity: 4,
    projection: 4,
    color: "#3b2f36",
    cap: "#171416",
    seasonNote: "Kremsi hindistan cevizi, beyaz çiçek ve baharatlı gövdesi gece, şık kombin ve serin hava için çok uygundur."
  },
  {
    brand: "Versace",
    name: "Dylan Blue Pour Homme",
    year: 2016,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["ambroksan", "greyfurt", "misk"],
    seasons: ["Dört Mevsim", "Yaz"],
    top: ["Greyfurt", "Bergamot", "Su notaları", "İncir yaprağı"],
    heart: ["Menekşe yaprağı", "Papiro", "Paçuli", "Karabiber"],
    base: ["Ambroksan", "Misk", "Tonka", "Safran"],
    longevity: 4,
    projection: 4,
    color: "#2d4f77",
    cap: "#c4a856",
    seasonNote: "Mavi aromatik yapı temiz, modern ve çok yönlüdür; yaz akşamı ve günlük kullanımda güçlüdür."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Y Eau de Parfum",
    year: 2018,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["elma", "adaçayı", "amberwood"],
    seasons: ["Dört Mevsim"],
    top: ["Elma", "Zencefil", "Bergamot"],
    heart: ["Adaçayı", "Ardıç", "Geranium"],
    base: ["Amberwood", "Tonka", "Sedir", "Vetiver"],
    longevity: 5,
    projection: 4,
    color: "#55708d",
    cap: "#111820",
    seasonNote: "Elma, adaçayı ve amberwood dengesi ofis, gece ve günlük kullanım için güvenli bir çok satan profildir."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre Intense",
    year: 2020,
    audience: "Kadın",
    family: "Amber Füjer",
    accords: ["lavanta", "vanilya", "portakal çiçeği"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Lavanta", "Mandalina", "Bergamot"],
    heart: ["Portakal çiçeği", "Yasemin sambac", "Orkide"],
    base: ["Madagaskar vanilyası", "Tonka", "Ambergris"],
    longevity: 5,
    projection: 4,
    color: "#c9824a",
    cap: "#1b1714",
    seasonNote: "Libre DNA'sını daha yoğun vanilya ve çiçeklerle taşır; akşam, davet ve serin havada parıldar."
  },
  {
    brand: "Prada",
    name: "Paradoxe",
    year: 2022,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["neroli", "amber", "misk"],
    seasons: ["İlkbahar", "Sonbahar", "Dört Mevsim"],
    top: ["Armut", "Mandalina", "Bergamot"],
    heart: ["Neroli", "Portakal çiçeği", "Yasemin sambac"],
    base: ["Bourbon vanilya", "Amber", "Beyaz misk", "Benzoin"],
    longevity: 4,
    projection: 4,
    color: "#efa18b",
    cap: "#202020",
    seasonNote: "Modern beyaz çiçek, amber ve misk yapısı hem ofis hem davet için güncel ve parlak bir profil verir."
  },
  {
    brand: "Prada",
    name: "Luna Rossa Carbon",
    year: 2017,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["lavanta", "metal", "ambroksan"],
    seasons: ["Dört Mevsim"],
    top: ["Bergamot", "Biber"],
    heart: ["Lavanta", "Kömür akoru", "Metal notalar", "Toprak"],
    base: ["Ambroksan", "Paçuli"],
    longevity: 4,
    projection: 3,
    color: "#8d9292",
    cap: "#1d1d1d",
    seasonNote: "Temiz lavanta ve metalik ambroksan yapısı modern ofis ve şehir kullanımı için çok uygundur."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Male Elixir",
    year: 2023,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["bal", "vanilya", "tütün"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Lavanta", "Nane"],
    heart: ["Bal", "Benzoin"],
    base: ["Vanilya", "Tütün", "Tonka"],
    longevity: 5,
    projection: 5,
    color: "#b58b48",
    cap: "#1e1f22",
    seasonNote: "Bal, vanilya ve tütün yoğunluğu kış geceleri ve güçlü akşam kombinleri için ideal."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "La Belle",
    year: 2019,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["armut", "vanilya", "vetiver"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Armut"],
    heart: ["Bergamot"],
    base: ["Vanilya", "Vetiver", "Amber"],
    longevity: 5,
    projection: 4,
    color: "#b84e5e",
    cap: "#d0a451",
    seasonNote: "Armut ve vanilya tatlılığı serin havada çekici, sıcak ve dikkat çekici durur."
  },
  {
    brand: "Giorgio Armani",
    name: "My Way",
    year: 2020,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["tuberose", "portakal çiçeği", "vanilya"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Portakal çiçeği", "Bergamot"],
    heart: ["Tuberose", "Yasemin"],
    base: ["Vanilya", "Beyaz misk", "Sedir"],
    longevity: 4,
    projection: 4,
    color: "#e78fa2",
    cap: "#1e3262",
    seasonNote: "Parlak beyaz çiçek karakteri temiz, genç ve şık gündüz kullanımlarına çok yakışır."
  },
  {
    brand: "Giorgio Armani",
    name: "Acqua di Gio Profondo",
    year: 2020,
    audience: "Erkek",
    family: "Aromatik Akuatik",
    accords: ["deniz", "mineral", "aromatik"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Deniz notaları", "Bergamot", "Yeşil mandalina"],
    heart: ["Biberiye", "Lavanta", "Servi", "Mastik"],
    base: ["Mineral amber", "Misk", "Paçuli"],
    longevity: 4,
    projection: 4,
    color: "#315f73",
    cap: "#1d2b33",
    seasonNote: "Derin akuatik ve mineral yapı yazlık ama daha olgun bir günlük imza verir."
  },
  {
    brand: "Dolce&Gabbana",
    name: "Devotion",
    year: 2023,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["limon", "vanilya", "panettone"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Şekerlenmiş limon"],
    heart: ["Portakal çiçeği", "Panettone"],
    base: ["Vanilya"],
    longevity: 4,
    projection: 4,
    color: "#d6a646",
    cap: "#b84d35",
    seasonNote: "Limonlu vanilya tatlılığı sıcak, neşeli ve şık bir gourmand karakter verir."
  },
  {
    brand: "Dolce&Gabbana",
    name: "K by Dolce&Gabbana",
    year: 2019,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["narenciye", "adaçayı", "sedir"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Kan portakalı", "Limon", "Ardıç", "Narenciye"],
    heart: ["Adaçayı", "Lavanta", "Geranium", "Biber"],
    base: ["Sedir", "Vetiver", "Paçuli"],
    longevity: 4,
    projection: 3,
    color: "#6d88a7",
    cap: "#c8a35a",
    seasonNote: "Temiz aromatik odunsu yapı günlük ve casual-smart kombinlerle kolay kullanılır."
  },
  {
    brand: "Carolina Herrera",
    name: "Very Good Girl",
    year: 2021,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["lychee", "gül", "vanilya"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Lychee", "Kırmızı kuş üzümü"],
    heart: ["Gül"],
    base: ["Vanilya", "Vetiver"],
    longevity: 4,
    projection: 4,
    color: "#d64258",
    cap: "#202020",
    seasonNote: "Kırmızı meyveli gül karakteri canlı, feminen ve davetlere uygun bir iz bırakır."
  },
  {
    brand: "Carolina Herrera",
    name: "212 VIP Men",
    year: 2011,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["votka", "tonka", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Lime", "Biber", "Zencefil", "Passionfruit"],
    heart: ["Votka", "Cin", "Nane", "Baharatlar"],
    base: ["Amber", "Deri", "Tonka", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    color: "#5d6365",
    cap: "#c5c5c0",
    seasonNote: "Gece, parti ve şehir akşamları için tatlı-baharatlı kulüp kokusu karakteri taşır."
  },
  {
    brand: "Burberry",
    name: "Goddess",
    year: 2023,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "lavanta", "kakao"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Vanilya infüzyonu", "Lavanta"],
    heart: ["Vanilya kavyarı"],
    base: ["Vanilya absolu", "Kakao"],
    longevity: 5,
    projection: 4,
    color: "#c69a55",
    cap: "#d3bd8d",
    seasonNote: "Üç boyutlu vanilya profili sıcak, modern ve kalıcı bir imza kokusu yaratır."
  },
  {
    brand: "Burberry",
    name: "Hero Eau de Parfum",
    year: 2022,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["sedir", "çam", "tütsü"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Çam iğnesi", "Olibanum"],
    heart: ["Benzoin", "Tütsü"],
    base: ["Atlas sediri", "Himalaya sediri", "Virginia sediri"],
    longevity: 4,
    projection: 4,
    color: "#7a604b",
    cap: "#191614",
    seasonNote: "Sedir merkezli modern odunsu yapı sonbahar ve kış gündüzlerinde maskülen ve temiz durur."
  },
  {
    brand: "Gucci",
    name: "Flora Gorgeous Gardenia",
    year: 2021,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["gardenya", "armut", "şeker"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Armut çiçeği", "Kırmızı meyveler", "Mandalina"],
    heart: ["Gardenya", "Yasemin", "Frangipani"],
    base: ["Esmer şeker", "Paçuli"],
    longevity: 4,
    projection: 3,
    color: "#eda4b7",
    cap: "#d7b887",
    seasonNote: "Tatlı gardenya ve meyveli yapı bahar-yaz gündüzlerinde enerjik ve feminen durur."
  },
  {
    brand: "Gucci",
    name: "Guilty Elixir de Parfum Pour Homme",
    year: 2023,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["portakal çiçeği", "vanilya", "ambrofix"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Portakal çiçeği", "Muskat", "Pimento"],
    heart: ["Orris", "Osmanthus", "Ambrofix"],
    base: ["Vanilya", "Benzoin", "Paçuli"],
    longevity: 5,
    projection: 5,
    color: "#6c4158",
    cap: "#d7b887",
    seasonNote: "Yoğun elixir yapısı gece, davet ve dikkat çekici kış kombinleri için uygundur."
  },
  {
    brand: "Givenchy",
    name: "Gentleman Reserve Privee",
    year: 2022,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["viski", "iris", "kestane"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot"],
    heart: ["İris", "Kestane"],
    base: ["Viski", "Odunsu notalar", "Amber"],
    longevity: 5,
    projection: 4,
    color: "#6a4d39",
    cap: "#202020",
    seasonNote: "Viski ve iris dokusu takım elbise, deri ayakkabı ve serin akşamlarla çok uyumludur."
  },
  {
    brand: "Givenchy",
    name: "Irresistible",
    year: 2020,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["armut", "gül", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Armut", "Ambrette"],
    heart: ["Gül", "İris"],
    base: ["Misk", "Sedir"],
    longevity: 4,
    projection: 3,
    color: "#e9a9b5",
    cap: "#d2c8c8",
    seasonNote: "Gül, armut ve misk yapısı romantik, temiz ve gündüz kullanıma uygun bir etki verir."
  },
  {
    brand: "Marc Jacobs",
    name: "Daisy",
    year: 2007,
    audience: "Kadın",
    family: "Çiçeksi Odunsu Misk",
    accords: ["menekşe", "çilek", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Çilek", "Menekşe yaprağı", "Greyfurt"],
    heart: ["Menekşe", "Gardenya", "Yasemin"],
    base: ["Misk", "Beyaz odun", "Vanilya"],
    longevity: 3,
    projection: 3,
    color: "#f0d57a",
    cap: "#ece7d4",
    seasonNote: "Hafif çiçeksi ve genç profili bahar-yaz gündüzleri için kolay, temiz ve neşeli bir seçimdir."
  },
  {
    brand: "Chloe",
    name: "Chloe Eau de Parfum",
    year: 2008,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["gül", "şakayık", "sabunsu"],
    seasons: ["İlkbahar", "Dört Mevsim"],
    top: ["Şakayık", "Lychee", "Frezya"],
    heart: ["Gül", "Müge", "Manolya"],
    base: ["Virginia sediri", "Amber"],
    longevity: 4,
    projection: 3,
    color: "#e8d3c7",
    cap: "#d6c3a5",
    seasonNote: "Temiz gül ve sabunsu çiçekler ofis, brunch ve günlük şık kombinlerde çok zarif durur."
  },
  {
    brand: "Azzaro",
    name: "The Most Wanted",
    year: 2021,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["kakule", "karamel", "amberwood"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Kakule"],
    heart: ["Toffee"],
    base: ["Amberwood"],
    longevity: 5,
    projection: 5,
    color: "#2b2420",
    cap: "#111111",
    seasonNote: "Koyu tatlı amber-baharat profili soğuk gece, deri ceket ve iddialı kombinlerle iyi gider."
  },
  {
    brand: "Montblanc",
    name: "Explorer",
    year: 2019,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["bergamot", "vetiver", "paçuli"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Bergamot", "Pembe biber", "Adaçayı"],
    heart: ["Haiti vetiveri", "Deri"],
    base: ["Ambroksan", "Akigalawood", "Paçuli", "Kakao"],
    longevity: 4,
    projection: 4,
    color: "#4c4945",
    cap: "#202020",
    seasonNote: "Modern odunsu-ferah imzası günlük, ofis ve seyahat kullanımında çok güvenlidir."
  },
  {
    brand: "Hugo Boss",
    name: "Bottled",
    year: 1998,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["elma", "tarçın", "odunsu"],
    seasons: ["Sonbahar", "Dört Mevsim"],
    top: ["Elma", "Erik", "Limon", "Bergamot"],
    heart: ["Tarçın", "Karanfil", "Maun"],
    base: ["Vanilya", "Sandal", "Sedir", "Vetiver"],
    longevity: 4,
    projection: 3,
    color: "#b89462",
    cap: "#bfc3c3",
    seasonNote: "Elma-tarçın klasikliği iş, günlük ve smart casual kombinlerde zamansız durur."
  },
  {
    brand: "Lalique",
    name: "Encre Noire",
    year: 2006,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["vetiver", "selvi", "misk"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Selvi"],
    heart: ["Vetiver"],
    base: ["Misk", "Kaşmir ağacı"],
    longevity: 4,
    projection: 3,
    color: "#1e1d1a",
    cap: "#141414",
    seasonNote: "Koyu vetiver ve selvi karakteri siyah, minimal ve entelektüel kombinlerle çok uyumludur."
  },
  {
    brand: "Kayali",
    name: "Vanilla 28",
    year: 2018,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "esmer şeker", "amber"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Vanilya orkidesi", "Yasemin"],
    heart: ["Esmer şeker", "Tonka"],
    base: ["Amber", "Misk", "Paçuli", "Vanilya"],
    longevity: 4,
    projection: 3,
    color: "#8b5a49",
    cap: "#c5a36a",
    seasonNote: "Katmanlamaya uygun tatlı vanilya profili serin havada sıcak ve rahat bir imza verir."
  },
  {
    brand: "Ariana Grande",
    name: "Cloud",
    year: 2018,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["lavanta", "hindistan cevizi", "pralin"],
    seasons: ["Sonbahar", "Dört Mevsim"],
    top: ["Lavanta", "Armut", "Bergamot"],
    heart: ["Hindistan cevizi", "Pralin", "Vanilya orkidesi"],
    base: ["Misk", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    color: "#c9d5df",
    cap: "#eef1f2",
    seasonNote: "Havadar tatlı amber hissi günlük kullanım, sweatshirt ve rahat şehir kombinlerine yakışır."
  }
];

const modernEssentials = [
  {
    brand: "Giorgio Armani",
    name: "Stronger With You",
    year: 2017,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["kestane", "vanilya", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kakule", "Pembe biber", "Menekşe yaprağı"],
    heart: ["Adaçayı", "Kestane", "Lavanta"],
    base: ["Vanilya", "Amberwood", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Kestane ve vanilya sıcaklığı serin hava, triko, palto ve akşam buluşmaları için çok uyumludur."
  },
  {
    brand: "Giorgio Armani",
    name: "Stronger With You Intensely",
    year: 2019,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["toffee", "tarçın", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Pembe biber", "Ardıç", "Menekşe"],
    heart: ["Toffee", "Tarçın", "Lavanta", "Adaçayı"],
    base: ["Vanilya", "Tonka", "Amber", "Süet"],
    longevity: 5,
    projection: 5,
    seasonNote: "Tatlı, yoğun ve sıcak profili kış gecesi, deri ceket, koyu triko ve iddialı akşam kullanımı için çok güçlüdür."
  },
  {
    brand: "Giorgio Armani",
    name: "Stronger With You Absolutely",
    year: 2021,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["rom", "vanilya", "kestane"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Rom", "Bergamot", "Elemi"],
    heart: ["Lavanta", "Davana"],
    base: ["Vanilya", "Kestane", "Sedir", "Paçuli"],
    longevity: 5,
    projection: 4,
    seasonNote: "Romlu vanilya ve kestane yapısı özel buluşma, kokteyl bar ve soğuk hava akşamlarında lüks durur."
  },
  {
    brand: "Tom Ford",
    name: "Ombré Leather",
    year: 2018,
    audience: "Erkek",
    family: "Deri",
    accords: ["deri", "yasemin", "amber"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Kakule"],
    heart: ["Deri", "Yasemin sambac", "Paçuli"],
    base: ["Amber", "Meşe yosunu", "Vetiver"],
    longevity: 5,
    projection: 4,
    seasonNote: "Deri, amber ve yasemin yapısı siyah takım, deri ceket, ofis sonrası davet ve lüks akşam yemekleriyle çok iyi gider."
  },
  {
    brand: "Tom Ford",
    name: "Noir Extreme",
    year: 2015,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["kulfi", "vanilya", "amber"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Mandalina", "Neroli", "Safran", "Kakule"],
    heart: ["Kulfi", "Gül", "Yasemin", "Portakal çiçeği"],
    base: ["Vanilya", "Amber", "Sandal", "Misk"],
    longevity: 5,
    projection: 4,
    seasonNote: "Kremsi amber ve baharatlı tatlılık smokin, kaşe kaban, özel davet ve kış akşamı kullanımına uygundur."
  },
  {
    brand: "Tom Ford",
    name: "Fucking Fabulous",
    year: 2017,
    audience: "Erkek",
    family: "Deri Amber",
    accords: ["deri", "badem", "tonka"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Lavanta", "Adaçayı"],
    heart: ["Badem", "Deri", "Vanilya", "Orris"],
    base: ["Tonka", "Kaşmir ağacı", "Amber", "Odunsu notalar"],
    longevity: 5,
    projection: 4,
    seasonNote: "Deri ve badem tonu iddialı gece kombinleri, siyah deri parçalar ve özel davetler için uygundur."
  },
  {
    brand: "Tom Ford",
    name: "Lost Cherry",
    year: 2018,
    audience: "Kadın",
    family: "Amber Meyveli",
    accords: ["kiraz", "badem", "tonka"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kiraz", "Acı badem", "Likör"],
    heart: ["Vişne", "Gül", "Yasemin sambac"],
    base: ["Tonka", "Vanilya", "Sandal", "Peru balsamı"],
    longevity: 4,
    projection: 4,
    seasonNote: "Kiraz likörü ve tonka yapısı saten elbise, deri ceket, romantik akşam ve kokteyl ortamına yakışır."
  },
  {
    brand: "Tom Ford",
    name: "Bitter Peach",
    year: 2020,
    audience: "Kadın",
    family: "Amber Meyveli",
    accords: ["şeftali", "rom", "paçuli"],
    seasons: ["Sonbahar", "Yaz"],
    top: ["Şeftali", "Kan portakalı", "Kakule"],
    heart: ["Rom", "Davana", "Yasemin"],
    base: ["Paçuli", "Sandal", "Vanilya", "Tonka"],
    longevity: 4,
    projection: 4,
    seasonNote: "Meyveli ama derin karakteri yaz akşamı, resort şıklığı ve cesur davet kombinlerinde öne çıkar."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Male Le Parfum",
    year: 2020,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["kakule", "lavanta", "vanilya"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kakule"],
    heart: ["Lavanta", "İris"],
    base: ["Vanilya", "Odunsu notalar", "Amber"],
    longevity: 5,
    projection: 4,
    seasonNote: "Modern vanilyalı lavanta profili siyah gömlek, blazer, akşam yemeği ve özel buluşma için çok uygundur."
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Beau Le Parfum",
    year: 2022,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["hindistan cevizi", "tonka", "odunsu"],
    seasons: ["Yaz", "Sonbahar"],
    top: ["Ananas", "İris"],
    heart: ["Hindistan cevizi", "Zencefil"],
    base: ["Tonka", "Sandal", "Amber"],
    longevity: 5,
    projection: 4,
    seasonNote: "Tropikal tonka ve odunsu yapı yaz gecesi, tatil, keten gömlek ve akşam bar ortamına yakışır."
  },
  {
    brand: "Dior",
    name: "Sauvage Elixir",
    year: 2021,
    audience: "Erkek",
    family: "Aromatik Baharatlı",
    accords: ["lavanta", "tarçın", "meyan"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Muskat", "Kakule", "Greyfurt"],
    heart: ["Lavanta"],
    base: ["Meyan", "Sandal", "Amber", "Paçuli"],
    longevity: 5,
    projection: 5,
    seasonNote: "Çok güçlü baharatlı yapı soğuk havada, koyu takım ve mesafeli dozda resmi akşam kullanımında idealdir."
  },
  {
    brand: "Dior",
    name: "Dior Homme Parfum",
    year: 2014,
    audience: "Erkek",
    family: "Deri Çiçeksi",
    accords: ["iris", "deri", "amber"],
    seasons: ["Kış", "Sonbahar"],
    top: ["İris", "Portakal"],
    heart: ["Deri", "Gül"],
    base: ["Sandal", "Sedir", "Ambrette", "Oud"],
    longevity: 5,
    projection: 4,
    seasonNote: "İris-deri yoğunluğu resmi davet, smokin, yün palto ve özel akşamlar için lüks bir seçenektir."
  },
  {
    brand: "Dior",
    name: "Dior Homme 2020",
    year: 2020,
    audience: "Erkek",
    family: "Odunsu Misk",
    accords: ["sedir", "kaşmir", "vetiver"],
    seasons: ["Dört Mevsim"],
    top: ["Bergamot", "Pembe biber", "Elemi"],
    heart: ["Kaşmir ağacı", "Atlas sediri", "Paçuli"],
    base: ["Vetiver", "Beyaz misk", "Iso E Super"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz odunsu profil beyaz gömlek, ofis, smart casual ve yıl boyu şehir kullanımı için güvenlidir."
  },
  {
    brand: "Chanel",
    name: "Allure Homme Sport Eau Extreme",
    year: 2012,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["tonka", "nane", "mandalina"],
    seasons: ["Dört Mevsim", "Yaz"],
    top: ["Mandalina", "Nane", "Selvi", "Adaçayı"],
    heart: ["Biber"],
    base: ["Tonka", "Misk", "Sandal", "Sedir"],
    longevity: 4,
    projection: 4,
    seasonNote: "Sportif ama şık tonka-nane dengesi polo, temiz sneaker, yaz akşamı ve günlük şehir kullanımına uygundur."
  },
  {
    brand: "Louis Vuitton",
    name: "Imagination",
    year: 2021,
    audience: "Erkek",
    family: "Narenciye Aromatik",
    accords: ["çay", "zencefil", "ambroksan"],
    seasons: ["Yaz", "İlkbahar", "Dört Mevsim"],
    top: ["Ağaç kavunu", "Bergamot", "Portakal"],
    heart: ["Zencefil", "Neroli", "Tarçın"],
    base: ["Siyah çay", "Ambroksan", "Guaiac ağacı"],
    longevity: 5,
    projection: 4,
    seasonNote: "Lüks narenciye-çay profili keten gömlek, ofis, seyahat ve sıcak hava günlük kullanımında çok rafinedir."
  },
  {
    brand: "Louis Vuitton",
    name: "L'Immensité",
    year: 2018,
    audience: "Erkek",
    family: "Aromatik Baharatlı",
    accords: ["zencefil", "greyfurt", "amber"],
    seasons: ["Dört Mevsim", "Yaz"],
    top: ["Greyfurt", "Zencefil", "Bergamot"],
    heart: ["Biberiye", "Adaçayı", "Ambergris"],
    base: ["Labdanum", "Ambroksan", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    seasonNote: "Ferahlık ve baharat dengesi şehirli ofis, yaz akşamı ve temiz smart casual kombinlere uygundur."
  },
  {
    brand: "Louis Vuitton",
    name: "Ombre Nomade",
    year: 2018,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["oud", "gül", "tütsü"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Oud", "Safran"],
    heart: ["Gül", "Ahududu", "Tütsü"],
    base: ["Amber", "Benzoin", "Deri"],
    longevity: 5,
    projection: 5,
    seasonNote: "Yoğun oud ve gül yapısı soğuk hava, resmi davet, premium lounge ve koyu takım için uygundur."
  },
  {
    brand: "Louis Vuitton",
    name: "Afternoon Swim",
    year: 2019,
    audience: "Erkek",
    family: "Narenciye Aromatik",
    accords: ["portakal", "mandalina", "bergamot"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Portakal", "Mandalina", "Bergamot"],
    heart: ["Zencefil", "Neroli"],
    base: ["Misk", "Ambergris"],
    longevity: 3,
    projection: 3,
    seasonNote: "Canlı narenciye profili sıcak hava, tatil, beyaz tişört ve ferah gündüz kullanımı için idealdir."
  },
  {
    brand: "Louis Vuitton",
    name: "Météore",
    year: 2020,
    audience: "Erkek",
    family: "Narenciye Aromatik",
    accords: ["mandalina", "biber", "vetiver"],
    seasons: ["Dört Mevsim", "Yaz"],
    top: ["Mandalina", "Bergamot", "Portakal"],
    heart: ["Biber", "Neroli", "Kakule"],
    base: ["Vetiver", "Ambroksan", "Misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz ve enerjik yapısı ofis, spor şıklık ve yaz akşamı için kontrollü bir lüks verir."
  },
  {
    brand: "Prada",
    name: "L'Homme Intense",
    year: 2017,
    audience: "Erkek",
    family: "Amber Odunsu",
    accords: ["iris", "amber", "deri"],
    seasons: ["Sonbahar", "Kış"],
    top: ["İris"],
    heart: ["Amber", "Paçuli"],
    base: ["Deri", "Tonka", "Sandal"],
    longevity: 5,
    projection: 4,
    seasonNote: "Pudralı iris ve deri karakteri iş toplantısı, triko, koyu palto ve şık akşamlar için uygundur."
  },
  {
    brand: "Prada",
    name: "Luna Rossa Ocean Eau de Parfum",
    year: 2023,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["lavanta", "vanilya", "amber"],
    seasons: ["Dört Mevsim"],
    top: ["Greyfurt", "Ardıç", "Elemi"],
    heart: ["Lavanta", "Adaçayı", "İris"],
    base: ["Vanilya", "Vetiver", "Paçuli"],
    longevity: 4,
    projection: 4,
    seasonNote: "Mavi aromatik yapı vanilya dokusuyla ofis, gece ve günlük modern kombinlerde güvenli çalışır."
  },
  {
    brand: "Hermes",
    name: "H24",
    year: 2021,
    audience: "Erkek",
    family: "Aromatik Yeşil",
    accords: ["adaçayı", "metal", "nergis"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Adaçayı", "Nergis"],
    heart: ["Gül ağacı", "Sclarene"],
    base: ["Metal notalar", "Misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Yeşil ve metalik profil açık renk gömlek, ofis ve modern minimalist kombinlere uygundur."
  },
  {
    brand: "Hermes",
    name: "Terre d'Hermes Eau Givree",
    year: 2022,
    audience: "Erkek",
    family: "Narenciye Odunsu",
    accords: ["ağaç kavunu", "ardıç", "mineral"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Ağaç kavunu", "Ardıç"],
    heart: ["Timur biberi"],
    base: ["Mineral notalar", "Odunsu notalar"],
    longevity: 4,
    projection: 3,
    seasonNote: "Buzlu narenciye-mineral yapısı yaz gündüzü, keten ve açık renk casual kombinlerde çok temiz durur."
  },
  {
    brand: "Rabanne",
    name: "Invictus",
    year: 2013,
    audience: "Erkek",
    family: "Odunsu Akuatik",
    accords: ["deniz", "greyfurt", "ambergris"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Greyfurt", "Deniz notaları", "Mandalina"],
    heart: ["Defne yaprağı", "Yasemin"],
    base: ["Ambergris", "Guaiac ağacı", "Meşe yosunu", "Paçuli"],
    longevity: 4,
    projection: 4,
    seasonNote: "Sportif denizli yapı yaz, spor sonrası, tatil ve rahat günlük kullanım için öne çıkar."
  },
  {
    brand: "Rabanne",
    name: "Invictus Victory",
    year: 2021,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["vanilya", "tütsü", "tonka"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Pembe biber", "Limon"],
    heart: ["Tütsü", "Lavanta"],
    base: ["Vanilya", "Tonka", "Amber"],
    longevity: 5,
    projection: 4,
    seasonNote: "Tatlı amber ve tütsü karışımı kış akşamı, deri ceket ve gece etkinliklerinde güçlüdür."
  },
  {
    brand: "Rabanne",
    name: "Phantom",
    year: 2021,
    audience: "Erkek",
    family: "Aromatik Füjer",
    accords: ["lavanta", "limon", "vanilya"],
    seasons: ["Dört Mevsim"],
    top: ["Lavanta", "Limon kabuğu", "Amalfi limonu"],
    heart: ["Duman", "Elma", "Toprak notaları"],
    base: ["Vanilya", "Vetiver", "Paçuli"],
    longevity: 4,
    projection: 4,
    seasonNote: "Genç ve modern aromatik profil günlük kullanım, casual kombin ve şehir akşamlarına uygundur."
  },
  {
    brand: "Rabanne",
    name: "1 Million Elixir",
    year: 2022,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["elma", "vanilya", "tonka"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Elma", "Davana"],
    heart: ["Gül", "Osmanthus", "Sedir"],
    base: ["Vanilya", "Tonka", "Paçuli"],
    longevity: 5,
    projection: 5,
    seasonNote: "Tatlı ve yoğun karakter gece kulübü, kış gecesi ve dikkat çekici akşam kombinleri için uygundur."
  },
  {
    brand: "Azzaro",
    name: "Wanted by Night",
    year: 2018,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["tarçın", "tütün", "meyveli"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Tarçın", "Mandalina", "Lavanta"],
    heart: ["Kırmızı sedir", "Tütsü", "Kimyon"],
    base: ["Tütün", "Sedir", "Deri"],
    longevity: 5,
    projection: 4,
    seasonNote: "Tarçın ve tütün geceleri güçlü açılır; koyu gömlek, bot ve bar ortamıyla iyi eşleşir."
  },
  {
    brand: "Azzaro",
    name: "The Most Wanted Parfum",
    year: 2022,
    audience: "Erkek",
    family: "Amber Baharatlı",
    accords: ["zencefil", "vanilya", "odunsu"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Zencefil"],
    heart: ["Odunsu notalar"],
    base: ["Bourbon vanilya"],
    longevity: 5,
    projection: 5,
    seasonNote: "Yoğun vanilyalı baharat profili kış daveti, özel buluşma ve akşam takım elbisesiyle çok uyumludur."
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Intense",
    year: 2023,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["vanilya", "lavanta", "vetiver"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Vanilya", "Zencefil"],
    heart: ["Lavanta"],
    base: ["Vetiver"],
    longevity: 5,
    projection: 4,
    seasonNote: "Vanilya-lavanta yoğunluğu gece, koyu triko, deri ceket ve serin hava buluşmaları için uygundur."
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Coral Fantasy",
    year: 2022,
    audience: "Erkek",
    family: "Aromatik Meyveli",
    accords: ["elma", "tütün", "adaçayı"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Kırmızı elma", "Kakule", "Bergamot"],
    heart: ["Adaçayı", "Lavanta", "Geranium"],
    base: ["Tütün", "Paçuli", "Vetiver"],
    longevity: 4,
    projection: 4,
    seasonNote: "Meyveli tütün dokusu genç, dikkat çekici ve akşam casual kombinlere uygundur."
  },
  {
    brand: "Yves Saint Laurent",
    name: "MYSLF",
    year: 2023,
    audience: "Erkek",
    family: "Odunsu Çiçeksi",
    accords: ["portakal çiçeği", "amber", "odunsu"],
    seasons: ["Dört Mevsim"],
    top: ["Bergamot"],
    heart: ["Portakal çiçeği"],
    base: ["Ambrofix", "Paçuli", "Odunsu notalar"],
    longevity: 4,
    projection: 4,
    seasonNote: "Temiz çiçeksi-odunsu profil ofis, günlük şehir kullanımı ve modern smart casual görünüm için uygundur."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Y Le Parfum",
    year: 2021,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["elma", "lavanta", "tonka"],
    seasons: ["Dört Mevsim", "Sonbahar"],
    top: ["Elma", "Greyfurt", "Zencefil"],
    heart: ["Adaçayı", "Lavanta", "Geranium"],
    base: ["Tonka", "Sedir", "Olibanum", "Paçuli"],
    longevity: 5,
    projection: 4,
    seasonNote: "Elma-lavanta DNA'sı daha yoğun ve şık hale gelir; ofis sonrası, akşam ve serin hava için uygundur."
  },
  {
    brand: "Dolce&Gabbana",
    name: "The One for Men Eau de Parfum",
    year: 2015,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["tütün", "amber", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Greyfurt", "Kişniş", "Fesleğen"],
    heart: ["Kakule", "Zencefil", "Portakal çiçeği"],
    base: ["Tütün", "Amber", "Sedir"],
    longevity: 4,
    projection: 3,
    seasonNote: "Yakın mesafe çekiciliği yüksek tütün-amber profili özel buluşma ve akşam yemeği için idealdir."
  },
  {
    brand: "Initio",
    name: "Oud for Greatness",
    year: 2018,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["oud", "safran", "lavanta"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Safran", "Muskat", "Lavanta"],
    heart: ["Oud"],
    base: ["Paçuli", "Misk"],
    longevity: 5,
    projection: 5,
    seasonNote: "Safranlı oud yapısı resmi gece, premium lounge ve koyu lüks kombinler için çok güçlüdür."
  },
  {
    brand: "Essential Parfums",
    name: "Bois Imperial",
    year: 2020,
    audience: "Erkek",
    family: "Odunsu Aromatik",
    accords: ["akigalawood", "fesleğen", "vetiver"],
    seasons: ["Dört Mevsim"],
    top: ["Fesleğen", "Biber"],
    heart: ["Akigalawood", "Vetiver"],
    base: ["Ambroksan", "Paçuli"],
    longevity: 5,
    projection: 4,
    seasonNote: "Keskin odunsu-aromatik profil ofis, minimalist stil ve yıl boyu günlük kullanım için çok pratiktir."
  },
  {
    brand: "Mancera",
    name: "Red Tobacco",
    year: 2017,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["tütün", "tarçın", "oud"],
    seasons: ["Kış"],
    top: ["Tarçın", "Safran", "Tütsü", "Muskat"],
    heart: ["Paçuli", "Yasemin"],
    base: ["Tütün", "Vanilya", "Oud", "Amber"],
    longevity: 5,
    projection: 5,
    seasonNote: "Çok yoğun tütün ve baharat yapısı sadece soğuk hava, gece ve mesafeli kullanımda en iyi sonucu verir."
  },
  {
    brand: "French Avenue",
    name: "Liquid Brun",
    year: 2024,
    audience: "Erkek",
    family: "Amber Vanilya",
    accords: ["vanilya", "tarçın", "pralin"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Bergamot", "Kakule"],
    heart: ["Vanilya", "Pralin", "Portakal çiçeği"],
    base: ["Amber", "Tonka", "Odunsu notalar"],
    longevity: 5,
    projection: 4,
    seasonNote: "Modern tatlı amber profili kışlık triko, palto, özel buluşma ve gece kullanımı için uygundur."
  },
  {
    brand: "Lancome",
    name: "Idole",
    year: 2019,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["gül", "misk", "armut"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Armut", "Bergamot", "Pembe biber"],
    heart: ["Gül", "Yasemin"],
    base: ["Beyaz misk", "Vanilya", "Paçuli"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz gül ve misk yapısı ofis, gündüz daveti ve açık renk zarif kombinler için çok uygundur."
  },
  {
    brand: "Lancome",
    name: "La Nuit Tresor",
    year: 2015,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["pralin", "gül", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Armut", "Mandalina", "Bergamot"],
    heart: ["Gül", "Vanilya orkidesi", "Çilek"],
    base: ["Pralin", "Karamel", "Vanilya", "Paçuli"],
    longevity: 5,
    projection: 4,
    seasonNote: "Tatlı gül-pralin yapısı romantik akşam, saten elbise ve kış davetlerinde öne çıkar."
  },
  {
    brand: "Lancome",
    name: "Idole Nectar",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Gourmand",
    accords: ["gül", "patlamış mısır", "vanilya"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Gül", "Grasse gülü", "Isparta gülü"],
    heart: ["Patlamış mısır", "Karamel"],
    base: ["Vanilya"],
    longevity: 4,
    projection: 4,
    seasonNote: "Gül ve gourmand dokusu renkli davet, brunch ve serin bahar akşamlarında modern durur."
  },
  {
    brand: "Dior",
    name: "Miss Dior Eau de Parfum 2021",
    year: 2021,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["gül", "iris", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["İris", "Şakayık", "Müge"],
    heart: ["Gül", "Şeftali", "Kayısı"],
    base: ["Vanilya", "Tonka", "Misk", "Sandal"],
    longevity: 4,
    projection: 3,
    seasonNote: "Yumuşak çiçeksi-pudralı yapı pastel elbise, gündüz daveti ve romantik bahar kombinleriyle uyumludur."
  },
  {
    brand: "Dior",
    name: "Miss Dior Essence",
    year: 2025,
    audience: "Kadın",
    family: "Chypre Meyveli",
    accords: ["meyveli", "gül", "paçuli"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Mürver çiçeği", "Meyveli notalar"],
    heart: ["Gül", "Yasemin"],
    base: ["Paçuli", "Meşe yosunu", "Amber"],
    longevity: 4,
    projection: 4,
    seasonNote: "Modern chypre dokusu şık davet, blazer, özel akşam ve geçiş mevsimleri için uygundur."
  },
  {
    brand: "Dior",
    name: "Poison Girl",
    year: 2016,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "badem", "tonka"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Acı portakal", "Limon"],
    heart: ["Gül", "Portakal çiçeği", "Badem"],
    base: ["Vanilya", "Tonka", "Sandal", "Tolu balsamı"],
    longevity: 5,
    projection: 4,
    seasonNote: "Tatlı badem-vanilya yapısı gece, deri ceket ve dikkat çekici kış kombinleri için uygundur."
  },
  {
    brand: "Chanel",
    name: "Gabrielle",
    year: 2017,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["yasemin", "tuberose", "portakal çiçeği"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Greyfurt", "Mandalina", "Frenk üzümü"],
    heart: ["Tuberose", "Yasemin", "Ylang-ylang", "Portakal çiçeği"],
    base: ["Misk", "Sandal"],
    longevity: 4,
    projection: 3,
    seasonNote: "Parlak beyaz çiçekler temiz blazer, gündüz daveti ve yaz akşamı şıklığıyla uyumludur."
  },
  {
    brand: "Chanel",
    name: "Chance Eau Tendre Eau de Parfum",
    year: 2019,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["greyfurt", "gül", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Greyfurt", "Ayva"],
    heart: ["Yasemin", "Gül"],
    base: ["Beyaz misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz meyveli-çiçeksi yapı günlük, romantik gündüz ve açık renk yaz kombinleri için çok uygundur."
  },
  {
    brand: "Gucci",
    name: "Bloom",
    year: 2017,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["tuberose", "yasemin", "rangoon creeper"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Yasemin"],
    heart: ["Tuberose"],
    base: ["Rangoon creeper", "Orris"],
    longevity: 4,
    projection: 4,
    seasonNote: "Doğal beyaz çiçek hissi elbise, brunch, düğün ve gündüz davetleri için idealdir."
  },
  {
    brand: "Gucci",
    name: "Flora Gorgeous Jasmine",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["yasemin", "mandalina", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Mandalina", "Bergamot", "Karabiber"],
    heart: ["Yasemin", "Ylang-ylang", "Manolya"],
    base: ["Sandal", "Benzoin", "Paçuli"],
    longevity: 4,
    projection: 3,
    seasonNote: "Jasmin merkezli ferah çiçeksi profil gündüz şıklığı, yaz daveti ve temiz kombinlere uygundur."
  },
  {
    brand: "Gucci",
    name: "Flora Gorgeous Orchid",
    year: 2024,
    audience: "Kadın",
    family: "Çiçeksi Gourmand",
    accords: ["orkide", "vanilya", "ozonik"],
    seasons: ["İlkbahar", "Yaz", "Dört Mevsim"],
    top: ["Vanilya"],
    heart: ["Orkide"],
    base: ["Ozonik notalar", "Misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Modern orkide-vanilya yapısı pastel kombinler, gündüz kullanım ve temiz feminen stiller için uygundur."
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma Intense",
    year: 2023,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "yasemin", "amber"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot", "Frenk üzümü"],
    heart: ["Yasemin", "Yasemin sambac"],
    base: ["Bourbon vanilya", "Amber", "Benzoin"],
    longevity: 5,
    projection: 4,
    seasonNote: "Yoğun vanilya-yasemin profili gece elbisesi, kış daveti ve özel buluşma için uygundur."
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma Coral Fantasy",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["kivi", "gül", "misk"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Kivi", "Portakal"],
    heart: ["Gül", "Yasemin", "Ambrette"],
    base: ["Misk", "Sedir"],
    longevity: 4,
    projection: 4,
    seasonNote: "Canlı meyveli gül yapısı yaz akşamı, renkli elbise ve enerjik davetlere uygundur."
  },
  {
    brand: "Prada",
    name: "Paradoxe Intense",
    year: 2023,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["yasemin", "amber", "vanilya"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Neroli", "Bergamot", "Armut"],
    heart: ["Yasemin", "Yosun"],
    base: ["Bourbon vanilya", "Amber", "Serenolide"],
    longevity: 5,
    projection: 4,
    seasonNote: "Daha yoğun amber-çiçeksi yapı ofis sonrası, davet ve serin hava kombinlerinde güçlüdür."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre Le Parfum",
    year: 2022,
    audience: "Kadın",
    family: "Amber Füjer",
    accords: ["bal", "zencefil", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Zencefil", "Safran", "Mandalina"],
    heart: ["Portakal çiçeği", "Lavanta"],
    base: ["Bal", "Vanilya", "Tonka", "Vetiver"],
    longevity: 5,
    projection: 5,
    seasonNote: "Bal ve vanilya yoğunluğu gece, kış daveti ve altın aksesuarlarla lüks bir etki verir."
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre Flowers & Flames",
    year: 2024,
    audience: "Kadın",
    family: "Beyaz Çiçeksi",
    accords: ["lilyum", "lavanta", "vanilya"],
    seasons: ["Yaz", "İlkbahar", "Sonbahar"],
    top: ["Lavanta", "Bergamot"],
    heart: ["Çöl zambağı", "Portakal çiçeği"],
    base: ["Vanilya", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Solar çiçeksi dokusu yaz akşamı, krem blazer ve sıcak hava davetlerinde iyi çalışır."
  },
  {
    brand: "Carolina Herrera",
    name: "Good Girl Blush",
    year: 2023,
    audience: "Kadın",
    family: "Çiçeksi Vanilya",
    accords: ["şakayık", "vanilya", "bergamot"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Bergamot", "Acı badem"],
    heart: ["Şakayık", "Ylang-ylang"],
    base: ["Vanilya", "Tonka"],
    longevity: 4,
    projection: 4,
    seasonNote: "Pembe çiçeksi-vanilyalı yapı romantik gündüz, açık renk elbise ve brunch için uygundur."
  },
  {
    brand: "Carolina Herrera",
    name: "Good Girl Supreme",
    year: 2020,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["orman meyveleri", "tonka", "yasemin"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Orman meyveleri", "Mısır yasemini"],
    heart: ["Tuberose", "Tonka"],
    base: ["Vetiver"],
    longevity: 4,
    projection: 4,
    seasonNote: "Meyveli tonka ve beyaz çiçek karışımı gece elbisesi, kokteyl ve özel akşamlar için uygundur."
  },
  {
    brand: "Mugler",
    name: "Alien Goddess",
    year: 2021,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["hindistan cevizi", "yasemin", "vanilya"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Hindistan cevizi suyu", "Bergamot"],
    heart: ["Yasemin", "Heliotrope"],
    base: ["Bourbon vanilya", "Cashmeran"],
    longevity: 4,
    projection: 4,
    seasonNote: "Solar hindistan cevizi-yasemin profili tatil, yaz akşamı ve açık renk elbiselerle uyumludur."
  },
  {
    brand: "Mugler",
    name: "Alien Hypersense",
    year: 2024,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["armut", "yasemin", "odunsu"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Armut", "Yeşil mandalina"],
    heart: ["Yasemin sambac", "Hint yasemini"],
    base: ["Kaşmir ağacı", "Amber", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Parlak meyveli-yasemin yapısı dikkat çekici gündüz davetleri ve enerjik yaz kombinleri için uygundur."
  },
  {
    brand: "Marc Jacobs",
    name: "Perfect",
    year: 2020,
    audience: "Kadın",
    family: "Çiçeksi",
    accords: ["ravent", "badem sütü", "sedir"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Ravent", "Nergis"],
    heart: ["Badem sütü"],
    base: ["Sedir", "Cashmeran"],
    longevity: 3,
    projection: 3,
    seasonNote: "Neşeli çiçeksi-bademli yapı gündüz, rahat elbise ve genç şehir kombinleri için uygundur."
  },
  {
    brand: "Marc Jacobs",
    name: "Daisy Wild",
    year: 2024,
    audience: "Kadın",
    family: "Çiçeksi Yeşil",
    accords: ["muz çiçeği", "yasemin", "vetiver"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Muz çiçeği"],
    heart: ["Yasemin", "Macadamia"],
    base: ["Vetiver", "Sandal"],
    longevity: 3,
    projection: 3,
    seasonNote: "Yeşil ve enerjik yapı yaz gündüzü, tatil ve rahat açık renk kombinlerle uyumludur."
  },
  {
    brand: "Burberry",
    name: "Her Elixir",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["çilek", "vanilya", "misk"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Çilek", "Böğürtlen"],
    heart: ["Yasemin"],
    base: ["Vanilya", "Amber", "Sandal"],
    longevity: 5,
    projection: 4,
    seasonNote: "Yoğun kırmızı meyve ve vanilya yapısı gündüzden akşama, pembe tonlar ve tatlı modern kombinlerle uyumludur."
  },
  {
    brand: "Kayali",
    name: "Yum Pistachio Gelato 33",
    year: 2023,
    audience: "Kadın",
    family: "Çiçeksi Gourmand",
    accords: ["fıstık", "dondurma", "pamuk şeker"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Fıstık", "Bergamot", "Rom"],
    heart: ["Pamuk şeker", "Müge", "Şakayık"],
    base: ["Krem şanti", "Marshmallow", "Sandal"],
    longevity: 4,
    projection: 4,
    seasonNote: "Eğlenceli gourmand yapı pastel kombin, brunch ve yaz akşamı kullanımlarında tatlı bir iz bırakır."
  },
  {
    brand: "Kayali",
    name: "Vanilla Candy Rock Sugar 42",
    year: 2024,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["şeker", "vanilya", "armut"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Armut", "Şeker", "Sakız"],
    heart: ["Vanilya", "Jellybean", "Karamel"],
    base: ["Tonka", "Paçuli", "Sandal"],
    longevity: 4,
    projection: 4,
    seasonNote: "Şekerli vanilya karakteri kışlık tatlı kokuları sevenler için casual ve eğlenceli bir seçenektir."
  },
  {
    brand: "Kayali",
    name: "Eden Juicy Apple 01",
    year: 2021,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["elma", "kırmızı meyveler", "misk"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Elma", "Lychee", "Frenk üzümü"],
    heart: ["Yasemin", "Gül", "Ahududu"],
    base: ["Vanilya", "Misk", "Amber"],
    longevity: 4,
    projection: 4,
    seasonNote: "Canlı elma-meyve profili günlük, yaz, alışveriş ve arkadaş buluşmaları için enerjik durur."
  },
  {
    brand: "Phlur",
    name: "Missing Person",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["misk", "temiz", "çiçeksi"],
    seasons: ["Dört Mevsim"],
    top: ["Misk", "Bergamot"],
    heart: ["Yasemin", "Siklamen", "Portakal çiçeği"],
    base: ["Sandal", "Beyaz misk"],
    longevity: 3,
    projection: 2,
    seasonNote: "Tene yakın temiz misk yapısı ofis, minimal stil, beyaz gömlek ve günlük kullanım için uygundur."
  },
  {
    brand: "Phlur",
    name: "Vanilla Skin",
    year: 2023,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["vanilya", "kaşmir", "misk"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Pembe biber", "Elma"],
    heart: ["Vanilya", "Yasemin", "Müge"],
    base: ["Kaşmir", "Sandal", "Benzoin"],
    longevity: 4,
    projection: 3,
    seasonNote: "Yumuşak vanilya-misk yapısı triko, ev şıklığı, yakın mesafe buluşma ve günlük kullanım için uygundur."
  },
  {
    brand: "Merit",
    name: "Retrospect",
    year: 2024,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["armut", "aldehit", "misk"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Bergamot", "Armut", "Aldehitler"],
    heart: ["Yasemin", "Gül", "Menekşe", "Orris"],
    base: ["Vanilya", "Misk", "Yosun"],
    longevity: 5,
    projection: 3,
    seasonNote: "Modern çiçeksi-misk yapısı temiz lüks, ofis, minimal blazer ve yıl boyu günlük kullanım için uygundur."
  },
  {
    brand: "Miu Miu",
    name: "Miutine",
    year: 2025,
    audience: "Kadın",
    family: "Chypre Gourmand",
    accords: ["çilek", "paçuli", "esmer şeker"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Çilek", "Esmer şeker"],
    heart: ["Gardenya", "Yasemin"],
    base: ["Paçuli", "Vanilya", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Meyveli chypre-gourmand profil moda odaklı davetler, şehir şıklığı ve geçiş mevsimlerine uygundur."
  },
  {
    brand: "Orebella",
    name: "Nightcap",
    year: 2024,
    audience: "Kadın",
    family: "Amber Baharatlı",
    accords: ["zencefil", "kakule", "vanilya"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Zencefil", "Kakule"],
    heart: ["Vanilya", "Sandal"],
    base: ["Amber", "Misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Baharatlı sıcak yapı gece, kadife blazer, triko ve yakın mesafe buluşmalar için uygundur."
  },
  {
    brand: "Parfums de Marly",
    name: "Delina La Rosée",
    year: 2021,
    audience: "Kadın",
    family: "Çiçeksi Meyveli",
    accords: ["lychee", "gül", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Lychee", "Armut", "Bergamot"],
    heart: ["Türk gülü", "Şakayık", "Su notaları"],
    base: ["Misk", "Odunsu notalar", "Vetiver"],
    longevity: 4,
    projection: 3,
    seasonNote: "Daha ferah Delina yorumu yaz, beyaz elbise, gündüz daveti ve zarif romantik kombinler için uygundur."
  },
  {
    brand: "BDK Parfums",
    name: "Rouge Smoking",
    year: 2018,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["kiraz", "vanilya", "tonka"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kiraz", "Pembe biber", "Bergamot"],
    heart: ["Siyah vanilya", "Heliotrope", "Portakal çiçeği"],
    base: ["Tonka", "Ambroksan", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Kiraz-vanilya karakteri Paris şıklığı, kırmızı ruj, gece elbisesi ve kokteyl ortamına uygundur."
  },
  {
    brand: "Gritti",
    name: "Duchessa",
    year: 2020,
    audience: "Kadın",
    family: "Amber Meyveli",
    accords: ["kiraz", "badem", "vanilya"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kiraz", "Safran"],
    heart: ["Badem", "Karanfil", "Gül"],
    base: ["Vanilya", "Paçuli", "Misk"],
    longevity: 5,
    projection: 4,
    seasonNote: "Lüks kiraz-badem yapısı özel davet, saten elbise, kış gecesi ve romantik ortamlar için uygundur."
  },
  {
    brand: "Narciso Rodriguez",
    name: "For Her Musc Noir Rose",
    year: 2022,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["misk", "erik", "tuberose"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Erik", "Pembe biber", "Bergamot"],
    heart: ["Misk", "Tuberose", "Gül"],
    base: ["Vanilya"],
    longevity: 4,
    projection: 3,
    seasonNote: "Kadifemsi misk ve erik yapısı yakın mesafe, şık günlük kombin ve romantik akşam için uygundur."
  },
  {
    brand: "Narciso Rodriguez",
    name: "For Her Pure Musc",
    year: 2019,
    audience: "Kadın",
    family: "Çiçeksi Misk",
    accords: ["misk", "beyaz çiçek", "kaşmir"],
    seasons: ["Dört Mevsim"],
    top: ["Misk"],
    heart: ["Beyaz çiçekler"],
    base: ["Cashmeran", "Amber", "Paçuli"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz ve sofistike misk yapısı ofis, beyaz gömlek, minimal takı ve yıl boyu günlük kullanıma uygundur."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540 Extrait",
    year: 2017,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["safran", "badem", "ambergris"],
    seasons: ["Dört Mevsim", "Sonbahar"],
    top: ["Acı badem", "Safran"],
    heart: ["Mısır yasemini", "Sedir"],
    base: ["Ambergris", "Misk", "Odunsu notalar"],
    longevity: 5,
    projection: 5,
    seasonNote: "Yoğun amber-çiçeksi imza özel davet, lüks otel lobisi ve dikkat çekici şehir kullanımı için uygundur."
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Oud Satin Mood",
    year: 2015,
    audience: "Unisex",
    family: "Amber Odunsu",
    accords: ["oud", "gül", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Menekşe"],
    heart: ["Gül", "Oud"],
    base: ["Vanilya", "Amber", "Benzoin"],
    longevity: 5,
    projection: 5,
    seasonNote: "Gül, oud ve vanilya yoğunluğu gala, kış daveti, kadife ve koyu lüks kombinlerle mükemmel uyumludur."
  },
  {
    brand: "Parfums de Marly",
    name: "Layton",
    year: 2016,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["elma", "vanilya", "kakule"],
    seasons: ["Sonbahar", "Kış", "Dört Mevsim"],
    top: ["Elma", "Lavanta", "Bergamot"],
    heart: ["Yasemin", "Menekşe", "Geranium"],
    base: ["Vanilya", "Kakule", "Sandal", "Paçuli"],
    longevity: 5,
    projection: 5,
    seasonNote: "Elma-vanilya ve baharat dengesi akşam, iş sonrası, triko ve şık günlük kullanım için çok popülerdir."
  },
  {
    brand: "Parfums de Marly",
    name: "Carlisle",
    year: 2015,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["elma", "paçuli", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Elma", "Muskat", "Safran"],
    heart: ["Tonka", "Osmanthus", "Davana"],
    base: ["Paçuli", "Vanilya", "Opoponax"],
    longevity: 5,
    projection: 5,
    seasonNote: "Koyu elma, paçuli ve vanilya yapısı soğuk hava, yün palto ve premium gece ortamlarına uygundur."
  },
  {
    brand: "Parfums de Marly",
    name: "Oajan",
    year: 2013,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["bal", "tarçın", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Bal", "Osmanthus"],
    heart: ["Benzoin", "Labdanum", "Ambergris"],
    base: ["Vanilya", "Tonka", "Paçuli"],
    longevity: 5,
    projection: 5,
    seasonNote: "Bal-tarçın yoğunluğu kış akşamı, kahve randevusu ve sıcak lüks kombinler için uygundur."
  },
  {
    brand: "Parfums de Marly",
    name: "Greenley",
    year: 2020,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["yeşil elma", "misk", "odunsu"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Yeşil elma", "Bergamot", "Mandalina"],
    heart: ["Petitgrain", "Menekşe", "Kaşmir ağacı"],
    base: ["Meşe yosunu", "Misk", "Sedir"],
    longevity: 4,
    projection: 4,
    seasonNote: "Yeşil elma ferahlığı yaz gündüzü, açık renk chino, ofis ve tatil kullanımı için uygundur."
  },
  {
    brand: "Parfums de Marly",
    name: "Sedley",
    year: 2019,
    audience: "Unisex",
    family: "Aromatik Akuatik",
    accords: ["nane", "narenciye", "ambroksan"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Nane", "Bergamot", "Greyfurt", "Limon"],
    heart: ["Lavanta", "Biberiye", "Geranium"],
    base: ["Ambroksan", "Sandal", "Sedir"],
    longevity: 4,
    projection: 4,
    seasonNote: "Naneli ferah yapı sıcak hava, spor şıklık, tatil ve temiz günlük kombinler için uygundur."
  },
  {
    brand: "Parfums de Marly",
    name: "Pegasus Exclusif",
    year: 2020,
    audience: "Unisex",
    family: "Amber Odunsu",
    accords: ["badem", "vanilya", "oud"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Kakule", "Bergamot", "Pembe biber"],
    heart: ["Badem", "Yasemin", "Heliotrope"],
    base: ["Vanilya", "Oud", "Amber", "Guaiac ağacı"],
    longevity: 5,
    projection: 5,
    seasonNote: "Badem, vanilya ve oud karışımı soğuk hava, deri bot ve güçlü akşam kullanımı için uygundur."
  },
  {
    brand: "Initio",
    name: "Musk Therapy",
    year: 2021,
    audience: "Unisex",
    family: "Çiçeksi Misk",
    accords: ["misk", "bergamot", "beyaz çiçek"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Bergamot", "Mandalina"],
    heart: ["Beyaz manolya", "Sandal"],
    base: ["Beyaz misk", "Siyah misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz ve lüks misk profili beyaz gömlek, spa hissi, ofis ve minimal kombinler için uygundur."
  },
  {
    brand: "Initio",
    name: "Paragon",
    year: 2022,
    audience: "Unisex",
    family: "Odunsu Aromatik",
    accords: ["erik", "adaçayı", "sandal"],
    seasons: ["Sonbahar", "Dört Mevsim"],
    top: ["Erik", "Adaçayı", "Bergamot"],
    heart: ["Biber", "Lavanta"],
    base: ["Sandal", "Oud", "Palo santo"],
    longevity: 5,
    projection: 4,
    seasonNote: "Erik ve aromatik odunsu yapı modern gece, sanat galerisi ve sofistike casual kombinler için uygundur."
  },
  {
    brand: "Xerjoff",
    name: "Torino21",
    year: 2021,
    audience: "Unisex",
    family: "Aromatik Yeşil",
    accords: ["nane", "limon", "fesleğen"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Nane", "Limon", "Kekik", "Fesleğen"],
    heart: ["Yasemin", "Lavanta", "Biberiye"],
    base: ["Misk", "Verbena"],
    longevity: 4,
    projection: 4,
    seasonNote: "Canlı yeşil ferahlık yaz gündüzü, tenis/club stili, beyaz polo ve tatil kullanımı için uygundur."
  },
  {
    brand: "Xerjoff",
    name: "Erba Gold",
    year: 2024,
    audience: "Unisex",
    family: "Amber Meyveli",
    accords: ["meyveli", "amber", "misk"],
    seasons: ["İlkbahar", "Yaz", "Sonbahar"],
    top: ["Portakal", "Limon", "Zencefil"],
    heart: ["Elma", "Tarçın", "Kakule"],
    base: ["Amber", "Misk", "Vanilya"],
    longevity: 5,
    projection: 4,
    seasonNote: "Parlak meyveli amber yapısı tatil, yaz akşamı ve gösterişli günlük kombinler için uygundur."
  },
  {
    brand: "Xerjoff",
    name: "Accento",
    year: 2011,
    audience: "Unisex",
    family: "Chypre Meyveli",
    accords: ["ananas", "iris", "misk"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Ananas", "Sümbül"],
    heart: ["İris", "Yasemin", "Pembe biber"],
    base: ["Misk", "Vetiver", "Paçuli", "Amber"],
    longevity: 5,
    projection: 4,
    seasonNote: "Meyveli chypre-iris profili şık gündüz, blazer ve yaz akşamı davetleri için uygundur."
  },
  {
    brand: "Nishane",
    name: "Wulong Cha",
    year: 2015,
    audience: "Unisex",
    family: "Narenciye Aromatik",
    accords: ["çay", "narenciye", "incir"],
    seasons: ["Yaz", "İlkbahar"],
    top: ["Bergamot", "Portakal", "Litsea cubeba"],
    heart: ["Oolong çayı", "Muskat"],
    base: ["İncir", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Çay-narenciye ferahlığı sıcak hava, beyaz gömlek, tatil ve temiz ofis kullanımı için uygundur."
  },
  {
    brand: "Nishane",
    name: "Hundred Silent Ways",
    year: 2016,
    audience: "Kadın",
    family: "Çiçeksi Vanilya",
    accords: ["tuberose", "vanilya", "şeftali"],
    seasons: ["Sonbahar", "İlkbahar"],
    top: ["Tuberose", "Mandalina", "Şeftali"],
    heart: ["Yasemin", "Gardenya", "Orris"],
    base: ["Vanilya", "Sandal", "Vetiver"],
    longevity: 5,
    projection: 4,
    seasonNote: "Kremsi çiçeksi-vanilyalı yapı şık davet, pastel elbise ve romantik akşamlar için uygundur."
  },
  {
    brand: "Nishane",
    name: "Fan Your Flames",
    year: 2016,
    audience: "Erkek",
    family: "Odunsu Amber",
    accords: ["rom", "hindistan cevizi", "tütün"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Hindistan cevizi", "Rom"],
    heart: ["Tütün", "Tonka"],
    base: ["Meşe yosunu", "Sedir"],
    longevity: 5,
    projection: 5,
    seasonNote: "Rom, hindistan cevizi ve tütün yapısı kış gecesi, bar ortamı ve deri ceketle güçlü durur."
  },
  {
    brand: "Le Labo",
    name: "The Noir 29",
    year: 2015,
    audience: "Unisex",
    family: "Aromatik Odunsu",
    accords: ["çay", "incir", "tütün"],
    seasons: ["Sonbahar", "Dört Mevsim"],
    top: ["Bergamot", "İncir", "Defne yaprağı"],
    heart: ["Siyah çay", "Sedir", "Vetiver"],
    base: ["Tütün", "Misk", "Saman"],
    longevity: 4,
    projection: 4,
    seasonNote: "Siyah çay ve tütün dokusu kitapçı, galeri, sonbahar şehir stili ve koyu casual kombinlerle uyumludur."
  },
  {
    brand: "Le Labo",
    name: "The Matcha 26",
    year: 2021,
    audience: "Unisex",
    family: "Odunsu Misk",
    accords: ["matcha", "incir", "misk"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Çay", "Bergamot"],
    heart: ["Matcha", "İncir"],
    base: ["Vetiver", "Sedir", "Misk"],
    longevity: 4,
    projection: 3,
    seasonNote: "Yumuşak matcha ve incir profili minimal giyim, ofis ve sakin günlük kullanım için uygundur."
  },
  {
    brand: "Byredo",
    name: "Mojave Ghost",
    year: 2014,
    audience: "Unisex",
    family: "Çiçeksi Odunsu Misk",
    accords: ["ambrette", "menekşe", "sandal"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Ambrette", "Sapodilla"],
    heart: ["Menekşe", "Sandal", "Manolya"],
    base: ["Misk", "Ambergris", "Sedir"],
    longevity: 4,
    projection: 3,
    seasonNote: "Hafif lüks odunsu-misk yapısı beyaz tişört, ofis ve yaz akşamı minimal şıklıkla uyumludur."
  },
  {
    brand: "Byredo",
    name: "Rose of No Man's Land",
    year: 2015,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["gül", "ahududu", "amber"],
    seasons: ["İlkbahar", "Sonbahar"],
    top: ["Pembe biber", "Türk gülü"],
    heart: ["Ahududu çiçeği", "Türk gülü"],
    base: ["Papirüs", "Amber"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz gül ve amber dokusu gündüz daveti, blazer ve romantik ama sade kombinler için uygundur."
  },
  {
    brand: "Byredo",
    name: "Bibliotheque",
    year: 2017,
    audience: "Unisex",
    family: "Çiçeksi Odunsu Misk",
    accords: ["erik", "deri", "paçuli"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Şeftali", "Erik"],
    heart: ["Menekşe", "Şakayık"],
    base: ["Deri", "Paçuli", "Vanilya", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Meyveli deri-patchouli yapısı kitaplık, sanat galerisi, kadife blazer ve serin akşamlarla uyumludur."
  },
  {
    brand: "Diptyque",
    name: "Orpheon",
    year: 2021,
    audience: "Unisex",
    family: "Odunsu Çiçeksi Misk",
    accords: ["ardıç", "tonka", "sedir"],
    seasons: ["Dört Mevsim", "Sonbahar"],
    top: ["Ardıç meyvesi"],
    heart: ["Yasemin", "Sedir"],
    base: ["Tonka", "Paçuli"],
    longevity: 4,
    projection: 3,
    seasonNote: "Temiz retro barbershop ve tonka dokusu ofis, şehir akşamı ve sade lüks kombinler için uygundur."
  },
  {
    brand: "Diptyque",
    name: "Fleur de Peau",
    year: 2018,
    audience: "Unisex",
    family: "Çiçeksi Misk",
    accords: ["misk", "iris", "ambrette"],
    seasons: ["Dört Mevsim"],
    top: ["Aldehitler", "Pembe biber", "Angelica"],
    heart: ["İris", "Türk gülü"],
    base: ["Misk", "Ambrette", "Sandal"],
    longevity: 4,
    projection: 3,
    seasonNote: "Pudralı temiz misk yapısı beyaz gömlek, ofis, minimal takı ve günlük lüks kullanım için uygundur."
  },
  {
    brand: "Diptyque",
    name: "Eau Duelle",
    year: 2010,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["vanilya", "kakule", "tütsü"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Kakule", "Pembe biber"],
    heart: ["Vanilya", "Ardıç"],
    base: ["Tütsü", "Sedir", "Siyah çay"],
    longevity: 4,
    projection: 3,
    seasonNote: "Baharatlı kuru vanilya yapısı triko, kahve randevusu ve sakin kış akşamları için uygundur."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Jazz Club",
    year: 2013,
    audience: "Unisex",
    family: "Deri Amber",
    accords: ["rom", "tütün", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Pembe biber", "Neroli", "Limon"],
    heart: ["Rom", "Adaçayı", "Vetiver"],
    base: ["Tütün yaprağı", "Vanilya", "Styrax"],
    longevity: 4,
    projection: 4,
    seasonNote: "Rom ve tütün profili kokteyl bar, deri ceket, akşam botu ve kış geceleri için uygundur."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Lazy Sunday Morning",
    year: 2013,
    audience: "Unisex",
    family: "Çiçeksi Misk",
    accords: ["temiz", "misk", "gül"],
    seasons: ["Dört Mevsim", "İlkbahar"],
    top: ["Armut", "Müge", "Aldehitler"],
    heart: ["İris", "Gül", "Portakal çiçeği"],
    base: ["Beyaz misk", "Ambrette", "Paçuli"],
    longevity: 3,
    projection: 2,
    seasonNote: "Temiz çarşaf hissi beyaz tişört, ev şıklığı, ofis ve ferah günlük kullanım için idealdir."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Coffee Break",
    year: 2019,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["kahve", "lavanta", "sütlü"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Biber", "Portakal çiçeği", "Paçuli"],
    heart: ["Kahve", "Lavanta", "Süt"],
    base: ["Vanilya", "Tonka", "Sedir"],
    longevity: 4,
    projection: 3,
    seasonNote: "Kahve ve lavanta rahatlığı triko, kahve randevusu ve sakin serin hava günlük kullanımına uygundur."
  },
  {
    brand: "Maison Margiela",
    name: "Replica Autumn Vibes",
    year: 2021,
    audience: "Unisex",
    family: "Odunsu Baharatlı",
    accords: ["akçaağaç", "sedir", "baharat"],
    seasons: ["Sonbahar"],
    top: ["Pembe biber", "Kişniş", "Kakule"],
    heart: ["Havuç tohumu", "Muskat", "Akçaağaç"],
    base: ["Sedir", "Yosun", "Fir balsam"],
    longevity: 4,
    projection: 3,
    seasonNote: "Kuru yaprak ve odunsu baharat hissi sonbahar yürüyüşü, süet ceket ve kahverengi tonlarla uyumludur."
  },
  {
    brand: "Maison Margiela",
    name: "Replica When the Rain Stops",
    year: 2021,
    audience: "Unisex",
    family: "Aromatik Akuatik",
    accords: ["yağmur", "gül", "paçuli"],
    seasons: ["İlkbahar", "Yaz"],
    top: ["Bergamot", "Pembe biber", "Yeşil notalar"],
    heart: ["Yağmur akoru", "Gül", "Yasemin"],
    base: ["Paçuli", "Yosun", "Çam"],
    longevity: 3,
    projection: 3,
    seasonNote: "Yağmur sonrası ferahlığı bahar günü, açık renk trençkot ve sakin günlük kullanım için uygundur."
  },
  {
    brand: "Kilian",
    name: "Black Phantom",
    year: 2017,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["rom", "kahve", "karamel"],
    seasons: ["Kış"],
    top: ["Rom"],
    heart: ["Kahve", "Badem", "Heliotrope"],
    base: ["Karamel", "Sandal", "Şeker", "Vetiver"],
    longevity: 5,
    projection: 4,
    seasonNote: "Koyu gourmand yapı kış gecesi, siyah giyim, özel kutlama ve lounge ortamı için uygundur."
  },
  {
    brand: "Kilian",
    name: "Princess",
    year: 2018,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["marshmallow", "yeşil çay", "zencefil"],
    seasons: ["Sonbahar", "Kış", "İlkbahar"],
    top: ["Zencefil", "Yeşil çay"],
    heart: ["Marshmallow", "Elma"],
    base: ["Vanilya", "Benzoin"],
    longevity: 4,
    projection: 3,
    seasonNote: "Çaylı marshmallow yapısı yumuşak triko, günlük şıklık ve tatlı ama hafif akşam kullanımı için uygundur."
  },
  {
    brand: "Kilian",
    name: "Rolling in Love",
    year: 2019,
    audience: "Kadın",
    family: "Amber Çiçeksi",
    accords: ["badem sütü", "tuberose", "misk"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Badem sütü", "Ambrette"],
    heart: ["İris", "Tuberose", "Frezya"],
    base: ["Tonka", "Vanilya", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Kremsi badem ve beyaz çiçek yapısı romantik akşam, saten ve yumuşak kış kombinlerine uygundur."
  },
  {
    brand: "Kilian",
    name: "Apple Brandy on the Rocks",
    year: 2021,
    audience: "Unisex",
    family: "Aromatik Meyveli",
    accords: ["elma", "konyak", "odunsu"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Bergamot", "Kakule"],
    heart: ["Elma", "Rom", "Brandy"],
    base: ["Ambroksan", "Sedir", "Vanilya"],
    longevity: 4,
    projection: 4,
    seasonNote: "Elmalı içki akoru kokteyl bar, deri ceket ve serin akşam buluşmaları için uygundur."
  },
  {
    brand: "Amouage",
    name: "Enclave",
    year: 2020,
    audience: "Erkek",
    family: "Amber Füjer",
    accords: ["nane", "amber", "tütsü"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Nane", "Kakule", "Tarçın", "Pembe biber"],
    heart: ["Tütsü", "Gül", "Paçuli"],
    base: ["Amber", "Labdanum", "Sandal"],
    longevity: 5,
    projection: 4,
    seasonNote: "Serin nane ve sıcak amber kontrastı lüks kış akşamları ve şık dış giyimle uyumludur."
  },
  {
    brand: "Amouage",
    name: "Overture Man",
    year: 2019,
    audience: "Erkek",
    family: "Odunsu Baharatlı",
    accords: ["konyak", "tütsü", "deri"],
    seasons: ["Kış"],
    top: ["Konyak", "Kimyon", "Safran"],
    heart: ["Mür", "Tarçın", "Labdanum"],
    base: ["Deri", "Tütsü", "Sandal", "Paçuli"],
    longevity: 5,
    projection: 5,
    seasonNote: "Konyak, deri ve reçine yoğunluğu resmi gece, soğuk hava ve koyu lüks kombinler için uygundur."
  },
  {
    brand: "Amouage",
    name: "Material",
    year: 2021,
    audience: "Unisex",
    family: "Amber Vanilya",
    accords: ["vanilya", "benzoin", "tonka"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Paçuli", "Elemi"],
    heart: ["Benzoin", "Vanilya"],
    base: ["Tonka", "Guaiac ağacı", "Oud", "Tütsü"],
    longevity: 5,
    projection: 4,
    seasonNote: "Reçineli vanilya yapısı kışlık triko, palto ve özel akşam kullanımı için lüks ve sıcak durur."
  },
  {
    brand: "Amouage",
    name: "Lineage",
    year: 2023,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["tütsü", "mineral", "baharat"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Zencefil", "Sichuan biberi", "Peru biberi"],
    heart: ["Tütsü", "Çemen", "Mür"],
    base: ["Vetiver", "Benzoin", "Paçuli"],
    longevity: 5,
    projection: 4,
    seasonNote: "Mineral tütsü ve baharat karakteri sanat odaklı davetler, kış şehir stili ve özgün kombinler için uygundur."
  },
  {
    brand: "Montale",
    name: "Arabians Tonka",
    year: 2019,
    audience: "Unisex",
    family: "Amber Odunsu",
    accords: ["tonka", "safran", "oud"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Safran", "Bergamot"],
    heart: ["Oud", "Gül"],
    base: ["Tonka", "Amber", "Misk", "Şeker kamışı"],
    longevity: 5,
    projection: 5,
    seasonNote: "Yoğun tonka-oud yapısı soğuk hava, gece kulübü ve mesafeli dozda dikkat çekici kullanım için uygundur."
  },
  {
    brand: "Maison Crivelli",
    name: "Hibiscus Mahajad",
    year: 2021,
    audience: "Unisex",
    family: "Amber Çiçeksi",
    accords: ["hibiskus", "vanilya", "deri"],
    seasons: ["Sonbahar", "Kış"],
    top: ["Hibiskus", "Nane", "Tarçın"],
    heart: ["Gül", "Vanilya", "Deri"],
    base: ["Ambrette", "Kasmeran"],
    longevity: 5,
    projection: 5,
    seasonNote: "Tatlı çiçeksi-deri yoğunluğu özel davet, kırmızı tonlar ve gösterişli gece kombinleri için uygundur."
  },
  {
    brand: "Tiziana Terenzi",
    name: "Kirke",
    year: 2015,
    audience: "Unisex",
    family: "Chypre Meyveli",
    accords: ["tropikal meyve", "misk", "paçuli"],
    seasons: ["Yaz", "İlkbahar", "Sonbahar"],
    top: ["Passionfruit", "Şeftali", "Ahududu", "Armut"],
    heart: ["Müge"],
    base: ["Misk", "Sandal", "Paçuli", "Vanilya"],
    longevity: 5,
    projection: 5,
    seasonNote: "Çok güçlü meyveli-miskli yapı yaz akşamı, tatil ve dikkat çekici açık hava kullanımı için uygundur."
  },
  {
    brand: "Lattafa",
    name: "Khamrah",
    year: 2022,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["tarçın", "hurma", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Muskat", "Bergamot"],
    heart: ["Hurma", "Pralin", "Tuberose"],
    base: ["Vanilya", "Tonka", "Benzoin", "Mür"],
    longevity: 5,
    projection: 5,
    seasonNote: "Tatlı baharat ve hurma profili kış akşamı, kahve randevusu ve sıcak gourmand sevenler için uygundur."
  },
  {
    brand: "Lattafa",
    name: "Khamrah Qahwa",
    year: 2023,
    audience: "Unisex",
    family: "Amber Baharatlı",
    accords: ["kahve", "tarçın", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Tarçın", "Kakule", "Zencefil"],
    heart: ["Kahve", "Pralin", "Meyveli notalar"],
    base: ["Vanilya", "Tonka", "Benzoin"],
    longevity: 5,
    projection: 5,
    seasonNote: "Kahveli Khamrah yorumu kış gecesi, triko, kahve randevusu ve sıcak kapalı mekanlar için uygundur."
  },
  {
    brand: "Lattafa",
    name: "Eclaire",
    year: 2024,
    audience: "Kadın",
    family: "Amber Vanilya",
    accords: ["karamel", "süt", "vanilya"],
    seasons: ["Kış", "Sonbahar"],
    top: ["Karamel", "Süt", "Şeker"],
    heart: ["Bal", "Beyaz çiçekler"],
    base: ["Vanilya", "Pralin", "Misk"],
    longevity: 4,
    projection: 4,
    seasonNote: "Sütlü karamel-vanilya profili soğuk hava, ev şıklığı, triko ve gourmand sevenler için uygundur."
  }
];

const catalogTargetPerAudience = 65000;
const catalogTargetTotal = catalogTargetPerAudience * 2;

const bestsellerProfiles = {
  Erkek: {
    target: catalogTargetPerAudience,
    editions: [
      "Eau de Parfum",
      "Parfum",
      "Intense",
      "Elixir",
      "Extreme",
      "Absolu",
      "Sport",
      "Fresh",
      "Blue",
      "Noir",
      "Amber",
      "Oud",
      "Vetiver",
      "Cedar",
      "Leather",
      "Aromatic",
      "Urban",
      "Signature",
      "Night",
      "Summer",
      "Winter",
      "Legend",
      "Royal",
      "Icon",
      "Platinum"
    ],
    themes: [
      {
        family: "Aromatik Füjer",
        seasons: ["Dört Mevsim"],
        accords: ["lavanta", "ambroksan", "temiz"],
        top: ["Bergamot", "Lavanta", "Nane"],
        heart: ["Adaçayı", "Geranium", "Biber"],
        base: ["Ambroksan", "Sedir", "Misk"],
        color: "#7fa7b4"
      },
      {
        family: "Odunsu Baharatlı",
        seasons: ["Sonbahar", "Kış"],
        accords: ["kakule", "tütün", "amber"],
        top: ["Kakule", "Karabiber", "Greyfurt"],
        heart: ["Tarçın", "Lavanta", "Sedir"],
        base: ["Tütün", "Amber", "Tonka"],
        color: "#9b6a44"
      },
      {
        family: "Narenciye Aromatik",
        seasons: ["Yaz", "İlkbahar"],
        accords: ["narenciye", "deniz", "misk"],
        top: ["Limon", "Greyfurt", "Bergamot"],
        heart: ["Deniz notaları", "Biberiye", "Yasemin"],
        base: ["Misk", "Sedir", "Ambergris"],
        color: "#9ecbd1"
      },
      {
        family: "Odunsu Amber",
        seasons: ["Sonbahar", "Kış"],
        accords: ["amberwood", "deri", "paçuli"],
        top: ["Pembe biber", "Bergamot", "Elemi"],
        heart: ["Deri", "Paçuli", "Sedir"],
        base: ["Amberwood", "Vetiver", "Sandal"],
        color: "#725c4e"
      },
      {
        family: "Odunsu Aromatik",
        seasons: ["İlkbahar", "Dört Mevsim"],
        accords: ["vetiver", "sedir", "yeşil"],
        top: ["Petitgrain", "Limon", "Zencefil"],
        heart: ["Menekşe yaprağı", "Adaçayı", "Sedir"],
        base: ["Vetiver", "Meşe yosunu", "Misk"],
        color: "#7f9267"
      }
    ]
  },
  Kadın: {
    target: catalogTargetPerAudience,
    editions: [
      "Eau de Parfum",
      "Parfum",
      "Intense",
      "Elixir",
      "Absolu",
      "Rose",
      "Bloom",
      "Floral",
      "Vanilla",
      "Rouge",
      "Nectar",
      "Lumiere",
      "Crystal",
      "Velvet",
      "Musk",
      "Jasmine",
      "Iris",
      "Pear",
      "Cherry",
      "Golden",
      "Summer",
      "Winter",
      "Signature",
      "Couture",
      "Icon"
    ],
    themes: [
      {
        family: "Çiçeksi Meyveli",
        seasons: ["İlkbahar", "Yaz"],
        accords: ["armut", "gül", "misk"],
        top: ["Armut", "Bergamot", "Frenk üzümü"],
        heart: ["Gül", "Şakayık", "Yasemin"],
        base: ["Misk", "Sedir", "Amber"],
        color: "#e7a3b4"
      },
      {
        family: "Amber Vanilya",
        seasons: ["Sonbahar", "Kış"],
        accords: ["vanilya", "pralin", "tonka"],
        top: ["Mandalina", "Pembe biber", "Armut"],
        heart: ["Portakal çiçeği", "Yasemin", "Kahve"],
        base: ["Vanilya", "Pralin", "Paçuli"],
        color: "#d99662"
      },
      {
        family: "Beyaz Çiçeksi",
        seasons: ["İlkbahar", "Yaz"],
        accords: ["tuberose", "yasemin", "neroli"],
        top: ["Neroli", "Bergamot", "Yeşil mandalina"],
        heart: ["Tuberose", "Yasemin", "Portakal çiçeği"],
        base: ["Beyaz misk", "Sandal", "Vanilya"],
        color: "#eadcc7"
      },
      {
        family: "Chypre Floral",
        seasons: ["Sonbahar", "İlkbahar"],
        accords: ["paçuli", "gül", "narenciye"],
        top: ["Portakal", "Bergamot", "Frenk üzümü"],
        heart: ["Gül", "Mimoza", "Yasemin"],
        base: ["Paçuli", "Vetiver", "Beyaz misk"],
        color: "#c57983"
      },
      {
        family: "Çiçeksi Misk",
        seasons: ["Dört Mevsim"],
        accords: ["temiz misk", "iris", "pudralı"],
        top: ["Aldehitler", "Armut", "Bergamot"],
        heart: ["İris", "Müge", "Gül"],
        base: ["Beyaz misk", "Sandal", "Ambrette"],
        color: "#d7d0ca"
      }
    ]
  }
};

const seasonOptions = ["Tümü", "Yaz", "Kış", "İlkbahar", "Sonbahar", "Dört Mevsim"];
const audienceOptions = ["Kadın", "Erkek"];
const storageKey = "perfume-atlas-custom-catalog-v3";
const UI_TEXT = {
  appName: "Man & Woman All Parfum List",
  brandKicker: "Luxury fragrance intelligence",
  loading: "Koku veritabanı başlatılıyor",
  search: "Arama",
  searchPlaceholder: "Parfüm, marka veya nota",
  filtersOpen: "Filtreleri Aç",
  filtersClose: "Filtreleri Kapat",
  season: "Mevsim",
  family: "Koku Ailesi",
  usage: "Kullanım",
  sort: "Sıralama",
  import: "Veri İçe Aktar",
  export: "Kataloğu Dışa Aktar",
  eyebrow: "Feel Monaco Fragrance Intelligence",
  bestsellers: "En çok satılanlar",
  resultsFor: "\"{query}\" sonuçları",
  perfume: "parfüm",
  allCatalog: "Çok satan katalog",
  clear: "Temizle",
  loadMore: "Daha Fazla Göster",
  noResults: "Bu filtrelerle eşleşen parfüm bulunamadı.",
  selectDetail: "Detay için bir parfüm seç.",
  popularityScore: "Popülerlik puanı",
  sections: {
    bestseller: "Çok Satan Bilgisi",
    season: "Mevsim",
    outfit: "Kıyafet Uyumu",
    location: "Ortam Uyumu",
    weather: "Hava / Derece",
    pyramid: "Nota Piramidi",
    accords: "Akorlar",
    performance: "Performans"
  },
  stats: { result: "Sonuç", men: "Erkek", women: "Kadın", top100: "Top 100" },
  sortOptions: {
    bestseller: "Çok satan sırasına göre",
    name: "Parfüm adına göre",
    brand: "Markaya göre",
    longevity: "Kalıcılığa göre",
    projection: "Yayılıma göre"
  },
  tiers: {
    top50: "İlk 50 çok satan",
    top100: "İlk 100 çok satan",
    top250: "İlk 250 çok satan",
    top500: "İlk 500 çok satan",
    top1000: "İlk 1.000 çok satan",
    top5000: "İlk 5.000 çok satan",
    top25000: "İlk 25.000 çok satan",
    top65000: "İlk 65.000 çok satan"
  },
  ratings: { longevity: "Kalıcılık", projection: "Yayılım" },
  notes: { top: "Üst", heart: "Orta", base: "Dip", missing: "Belirtilmedi" }
};

const state = {
  query: "",
  season: "Tümü",
  family: "Tümü",
  audience: "Tümü",
  sort: "bestseller",
  selectedId: "",
  visibleCount: 0
};

const textCollator = new Intl.Collator("tr-TR", { sensitivity: "base", numeric: true });

const baseCatalog = normalizeCatalog(
  buildBestsellerCatalog([...modernEssentials, ...elitePerfumes, ...designerEssentials, ...seedPerfumes])
);
const baseCatalogIds = new Set(baseCatalog.map((item) => item.id));
let catalog = [...baseCatalog, ...normalizeCatalog(loadCustomPerfumes())].sort(compareBestseller);
let catalogById = new Map(catalog.map((item) => [item.id, item]));
let familyFilterOptions = buildFamilyFilterOptions();
let currentFilteredCatalog = [];
let searchDebounceTimer = 0;

const elements = {
  brandKicker: document.querySelector(".brand-kicker"),
  appTitle: document.querySelector(".brand-block h1"),
  searchLabel: document.querySelector(".search-box span"),
  filterTitles: document.querySelectorAll(".filter-title"),
  sortLabel: document.querySelector(".filter-group.compact label"),
  topbarEyebrow: document.querySelector(".eyebrow"),
  loaderText: document.querySelector(".loader-core p"),
  catalogMeta: document.querySelector("#catalogMeta"),
  searchInput: document.querySelector("#searchInput"),
  seasonFilters: document.querySelector("#seasonFilters"),
  familyFilters: document.querySelector("#familyFilters"),
  audienceFilters: document.querySelector("#audienceFilters"),
  sortSelect: document.querySelector("#sortSelect"),
  statsGrid: document.querySelector("#statsGrid"),
  resultTitle: document.querySelector("#resultTitle"),
  resultCount: document.querySelector("#resultCount"),
  activeFilterLabel: document.querySelector("#activeFilterLabel"),
  clearFiltersButton: document.querySelector("#clearFiltersButton"),
  mobileFilterToggle: document.querySelector("#mobileFilterToggle"),
  perfumeGrid: document.querySelector("#perfumeGrid"),
  loadMoreButton: document.querySelector("#loadMoreButton"),
  sidebar: document.querySelector(".sidebar"),
  detailPanel: document.querySelector(".detail-panel"),
  detailContent: document.querySelector("#detailContent"),
  detailModal: document.querySelector("#detailModal"),
  modalCard: document.querySelector(".modal-card"),
  modalDetailContent: document.querySelector("#modalDetailContent"),
  modalCloseButton: document.querySelector("#modalCloseButton"),
  template: document.querySelector("#perfumeCardTemplate"),
  importButton: document.querySelector("#importButton"),
  exportButton: document.querySelector("#exportButton"),
  topImportButton: document.querySelector("#topImportButton"),
  topExportButton: document.querySelector("#topExportButton"),
  fileInput: document.querySelector("#fileInput")
};

function t(path, vars = {}) {
  const value = path.split(".").reduce((current, key) => current?.[key], UI_TEXT);
  return String(value ?? path).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

function translateTerm(value) {
  return String(value ?? "");
}

function translateList(items) {
  return toArray(items).map(translateTerm);
}

function currentLocale() {
  return "tr-TR";
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ı", "i");
}

function isAllFilter(value) {
  return value === "Tümü";
}

function tierLabel(rank) {
  if (rank <= 50) return t("tiers.top50");
  if (rank <= 100) return t("tiers.top100");
  if (rank <= 250) return t("tiers.top250");
  if (rank <= 500) return t("tiers.top500");
  if (rank <= 1000) return t("tiers.top1000");
  if (rank <= 5000) return t("tiers.top5000");
  if (rank <= 25000) return t("tiers.top25000");
  return t("tiers.top65000");
}

function localizedSeasonNote(item) {
  return item.seasonNote || buildSeasonNote(item);
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function catalogSummaryText() {
  return `${catalogTargetTotal.toLocaleString("tr-TR")} parfüm · ${catalogTargetPerAudience.toLocaleString("tr-TR")} erkek · ${catalogTargetPerAudience.toLocaleString("tr-TR")} kadın`;
}

function buildBestsellerCatalog(items) {
  return ["Erkek", "Kadın"].flatMap((audience, audienceIndex) => {
    const profile = bestsellerProfiles[audience];
    const baseItems = items.filter((item) => item.audience === audience || item.audience === "Unisex");
    const generated = [];

    for (let index = 0; index < profile.target; index += 1) {
      const base = baseItems[index % baseItems.length];
      const cycle = Math.floor(index / baseItems.length);
      const theme = profile.themes[(index + cycle) % profile.themes.length];
      const edition = cycle === 0 ? "" : ` ${profile.editions[(cycle - 1) % profile.editions.length]}`;
      const duplicateMark = cycle > profile.editions.length ? ` ${cycle + 1}` : "";
      const categoryRank = index + 1;
      const overallRank = categoryRank * 2 - (audienceIndex === 0 ? 1 : 0);
      const topHundred = categoryRank <= 100;
      const mergedName = `${base.name}${edition}${duplicateMark}`;

      generated.push({
        ...base,
        id: makeId(`${audience}-${categoryRank}-${base.brand}-${mergedName}`),
        name: mergedName,
        audience,
        family: cycle === 0 ? base.family : theme.family,
        accords: cycle === 0 ? base.accords : uniqueList([...theme.accords, ...base.accords]).slice(0, 5),
        seasons: cycle === 0 ? base.seasons.filter((season) => season !== "Dört Mevsim").concat(base.seasons.includes("Dört Mevsim") ? ["Dört Mevsim"] : []) : theme.seasons,
        top: cycle === 0 ? base.top : uniqueList([...theme.top, ...base.top]).slice(0, 6),
        heart: cycle === 0 ? base.heart : uniqueList([...theme.heart, ...base.heart]).slice(0, 6),
        base: cycle === 0 ? base.base : uniqueList([...theme.base, ...base.base]).slice(0, 6),
        longevity: cycle === 0 ? base.longevity : Math.min(5, Math.max(3, base.longevity + ((cycle + index) % 3 === 0 ? 1 : 0))),
        projection: cycle === 0 ? base.projection : Math.min(5, Math.max(2, base.projection + ((cycle + index) % 4 === 0 ? 1 : 0))),
        color: cycle === 0 ? base.color : theme.color,
        bestsellerRank: categoryRank,
        overallRank,
        bestsellerTier: getBestsellerTier(categoryRank),
        bestsellerScore: profile.target * 2 + 1 - overallRank,
        topHundred,
        outfits: cycle === 0 ? base.outfits : undefined,
        occasions: cycle === 0 ? base.occasions : undefined,
        seasonNote:
          cycle === 0
            ? `${base.seasonNote} Çok satanlar katalogunda ${audience.toLocaleLowerCase("tr-TR")} kategorisinde #${categoryRank}.`
            : `${mergedName}, ${base.brand} çizgisinden türetilmiş çok satan profilidir. ${theme.seasons.join(", ")} kullanımı için öne çıkar; ${theme.accords.join(", ")} akorları mevsim karakterini belirler.`
      });
    }

    return generated;
  });
}

function getBestsellerTier(rank) {
  if (rank <= 50) return "İlk 50 çok satan";
  if (rank <= 100) return "İlk 100 çok satan";
  if (rank <= 250) return "İlk 250 çok satan";
  if (rank <= 500) return "İlk 500 çok satan";
  if (rank <= 1000) return "İlk 1.000 çok satan";
  if (rank <= 5000) return "İlk 5.000 çok satan";
  if (rank <= 25000) return "İlk 25.000 çok satan";
  return "İlk 65.000 çok satan";
}

function uniqueList(items) {
  return [...new Set(toArray(items.flat ? items.flat() : items))].filter(Boolean);
}

function normalizeCatalog(items) {
  return items.map((item, index) => {
    const normalized = {
      ...item,
      id: item.id || makeId(`${item.brand}-${item.name}-${index}`),
      year: Number(item.year) || "",
      accords: toArray(item.accords),
      seasons: toArray(item.seasons),
      top: toArray(item.top),
      heart: toArray(item.heart),
      base: toArray(item.base),
      longevity: clampRating(item.longevity),
      projection: clampRating(item.projection),
      color: item.color || colorFromFamily(item.family),
      cap: item.cap || "#262626",
      seasonNote: item.seasonNote || buildSeasonNote(item),
      outfits: toArray(item.outfits).length ? toArray(item.outfits) : buildOutfitGuide(item),
      occasions: toArray(item.occasions).length ? toArray(item.occasions) : buildOccasionGuide(item)
    };

    normalized.bottleImage = item.bottleImage || bottleImageForAudience(normalized.audience);
    normalized.weather = item.weather || buildWeatherGuide(normalized);
    normalized.longevityHours = item.longevityHours || estimateLongevityHours(normalized, index);
    normalized.searchIndex = buildSearchIndex(normalized);

    return normalized;
  });
}

function buildSearchIndex(item) {
  return normalizeSearchText(
    [
      item.brand,
      item.name,
      item.family,
      item.audience,
      item.bestsellerTier,
      tierLabel(item.bestsellerRank || catalogTargetPerAudience),
      item.topHundred ? "top 100 çok satan top 100 best seller" : "çok satan best seller",
      item.weather?.label,
      item.weather?.range,
      item.longevityHours,
      ...item.accords,
      ...item.seasons,
      ...item.outfits,
      ...item.occasions,
      ...item.top,
      ...item.heart,
      ...item.base
    ].join(" ")
  );
}

function makeId(value) {
  return value
    .toString()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (!value) return [];
  return String(value)
    .split(/[;,|]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function clampRating(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 3;
  return Math.max(1, Math.min(5, Math.round(number)));
}

function bottleImageForAudience(audience) {
  return audience === "Kadın" ? "female-bottle-cutout.png" : "male-bottle-cutout.png";
}

function stableHash(value) {
  return String(value)
    .split("")
    .reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) % 9973, 7);
}

function profileText(item) {
  return [item.name, item.family, item.audience, ...toArray(item.accords), ...toArray(item.seasons), ...toArray(item.base)]
    .join(" ")
    .toLocaleLowerCase("tr-TR");
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function estimateLongevityHours(item, index = 0) {
  const text = profileText(item);
  const rating = clampRating(item.longevity);
  const variant = stableHash(`${item.brand}-${item.name}-${index}`) % 4;
  const fresh = hasAny(text, ["narenciye", "akuatik", "deniz", "çay", "yeşil", "temiz", "kolonya", "nane", "yaz"]);
  const soft = hasAny(text, ["misk", "çiçek", "floral", "meyveli", "armut", "gül", "yasemin"]);
  const dense = hasAny(text, ["amber", "vanilya", "baharat", "deri", "oud", "tütün", "tütsü", "tonka", "paçuli", "gourmand", "bal", "karamel"]);
  const extra = hasAny(text, ["elixir", "extrait", "intense", "parfum", "absolutely", "red tobacco", "arabians tonka", "interlude", "sauvage elixir"]);

  if (rating <= 1) return variant % 2 ? "1-2 saat" : "1-3 saat";
  if (rating === 2) return fresh ? "2-4 saat" : "3-4 saat";
  if (rating === 3) {
    if (fresh) return variant % 2 ? "3-5 saat" : "4-5 saat";
    if (dense) return variant % 2 ? "5-6 saat" : "5-7 saat";
    return variant % 2 ? "4-6 saat" : "5-6 saat";
  }
  if (rating === 4) {
    if (fresh) return variant % 2 ? "4-6 saat" : "5-6 saat";
    if (dense) return variant === 0 ? "6-7 saat" : variant === 1 ? "6-8 saat" : "7-8 saat";
    if (soft) return variant % 2 ? "5-7 saat" : "6-7 saat";
    return variant % 2 ? "6-8 saat" : "5-7 saat";
  }
  if (fresh) return variant % 2 ? "6-7 saat" : "6-8 saat";
  if (extra || dense) return variant === 0 ? "8-10 saat" : variant === 1 ? "9-11 saat" : "10-12+ saat";
  if (soft) return variant % 2 ? "7-8 saat" : "7-9 saat";
  return variant % 2 ? "7-9 saat" : "8-9 saat";
}

function buildWeatherGuide(item) {
  const text = profileText(item);
  const seasons = toArray(item.seasons);
  const fresh = hasAny(text, ["narenciye", "akuatik", "deniz", "yeşil", "nane", "çay", "limon", "bergamot"]);
  const dense = hasAny(text, ["amber", "vanilya", "baharat", "deri", "oud", "tütün", "tütsü", "tonka", "bal", "karamel"]);
  const floral = hasAny(text, ["çiçek", "floral", "gül", "yasemin", "misk", "meyveli"]);
  const strong = Number(item.projection) >= 4 || Number(item.longevity) >= 5;

  if (seasons.includes("Kış") || (dense && !seasons.includes("Yaz"))) {
    return strong
      ? { icon: "❄", label: "Soğuk ve serin hava", range: "-5°C - 16°C" }
      : { icon: "🌙", label: "Serin akşam", range: "6°C - 20°C" };
  }

  if (seasons.includes("Yaz") || fresh) {
    return strong
      ? { icon: "🌤", label: "Ilık yaz akşamı", range: "18°C - 28°C" }
      : { icon: "☀", label: "Sıcak hava", range: "22°C - 34°C" };
  }

  if (seasons.includes("İlkbahar") || floral) {
    return { icon: "🌸", label: "Ilık ve ferah hava", range: "14°C - 26°C" };
  }

  if (seasons.includes("Sonbahar")) {
    return { icon: "🍂", label: "Serin geçiş havası", range: "8°C - 22°C" };
  }

  return { icon: "⛅", label: "Dört mevsim dengeli", range: "10°C - 28°C" };
}

function colorFromFamily(family = "") {
  const key = family.toLocaleLowerCase("tr-TR");
  if (key.includes("narenciye") || key.includes("akuatik")) return "#9ed3c8";
  if (key.includes("vanilya") || key.includes("gourmand")) return "#d79b57";
  if (key.includes("çiçek")) return "#dfa0b1";
  if (key.includes("odunsu")) return "#a48358";
  if (key.includes("deri")) return "#80624d";
  if (key.includes("amber")) return "#b47562";
  return "#b9c5aa";
}

function buildSeasonNote(item) {
  const seasons = toArray(item.seasons).join(", ") || "Dört Mevsim";
  return `${item.name} için önerilen mevsim: ${seasons}. Nota yapısı ve yoğunluğu bu sınıflandırmaya göre değerlendirilir.`;
}

function buildOutfitGuide(item) {
  const family = String(item.family || "").toLocaleLowerCase("tr-TR");
  const seasons = toArray(item.seasons);
  const audience = item.audience || "Unisex";

  if (family.includes("akuatik") || family.includes("narenciye")) {
    return audience === "Kadın"
      ? ["Keten elbise", "beyaz gömlek", "açık renk blazer", "minimal sandalet"]
      : ["Keten gömlek", "beyaz tişört", "açık renk chino", "temiz sneaker"];
  }

  if (family.includes("vanilya") || family.includes("amber") || family.includes("baharat")) {
    return audience === "Kadın"
      ? ["Saten elbise", "kaşmir kazak", "koyu palto", "altın aksesuar"]
      : ["Yün palto", "koyu triko", "deri ceket", "akşam takım elbisesi"];
  }

  if (family.includes("çiçek") || family.includes("floral")) {
    return audience === "Kadın"
      ? ["İpek bluz", "pastel elbise", "krem blazer", "inci aksesuar"]
      : ["Açık renk gömlek", "ince blazer", "loose-fit pantolon", "süet ayakkabı"];
  }

  if (family.includes("deri") || family.includes("oud") || family.includes("odunsu")) {
    return audience === "Kadın"
      ? ["Deri ceket", "siyah elbise", "yün kaban", "tok kumaş pantolon"]
      : ["Deri bot", "süet ceket", "lacivert takım", "kaşe kaban"];
  }

  if (seasons.includes("Yaz")) {
    return audience === "Kadın"
      ? ["Açık renk elbise", "keten takım", "ince gömlek", "hasır çanta"]
      : ["Polo yaka", "keten pantolon", "hafif overshirt", "loafers"];
  }

  return audience === "Kadın"
    ? ["Temiz kesimli blazer", "düz elbise", "triko set", "minimal takı"]
    : ["Smart casual gömlek", "chino pantolon", "basic triko", "minimal saat"];
}

function buildOccasionGuide(item) {
  const family = String(item.family || "").toLocaleLowerCase("tr-TR");
  const seasons = toArray(item.seasons);
  const strong = Number(item.projection) >= 4 || Number(item.longevity) >= 5;

  if (family.includes("akuatik") || family.includes("narenciye")) {
    return ["Yaz gündüzü", "tatil", "spor sonrası", "rahat ofis"];
  }

  if (family.includes("vanilya") || family.includes("amber") || family.includes("baharat")) {
    return strong
      ? ["Akşam yemeği", "özel buluşma", "kış daveti", "kokteyl bar"]
      : ["Serin hava günlük kullanım", "yakın mesafe buluşma", "kahve randevusu", "akşam yürüyüşü"];
  }

  if (family.includes("çiçek") || family.includes("floral")) {
    return ["Brunch", "düğün", "gündüz daveti", "romantik buluşma"];
  }

  if (family.includes("deri") || family.includes("oud") || family.includes("odunsu")) {
    return strong
      ? ["Resmi davet", "gece etkinliği", "premium lounge", "soğuk hava buluşması"]
      : ["İş toplantısı", "şehir içi günlük kullanım", "galeri gezisi", "sonbahar akşamı"];
  }

  if (seasons.includes("Kış")) {
    return ["Kış akşamı", "özel davet", "kapalı mekan", "uzun gece kullanımı"];
  }

  return ["Ofis", "günlük kullanım", "şehir gezisi", "arkadaş buluşması"];
}

function loadCustomPerfumes() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomPerfumes(items) {
  const customOnly = items.filter((item) => !baseCatalogIds.has(item.id));
  localStorage.setItem(storageKey, JSON.stringify(customOnly));
}

function init() {
  applyTurkishText();
  resetVisibleCount();
  renderFilters();
  bindEvents();
  state.selectedId = catalog[0]?.id || "";
  update();
  hideLoadingScreen();
}

function applyTurkishText() {
  document.documentElement.lang = "tr";
  document.title = t("appName");

  setText(elements.brandKicker, t("brandKicker"));
  setText(elements.appTitle, t("appName"));
  setText(elements.catalogMeta, catalogSummaryText());
  setText(elements.searchLabel, t("search"));
  setText(elements.importButton, t("import"));
  setText(elements.exportButton, t("export"));
  setText(elements.topImportButton, t("import"));
  setText(elements.topExportButton, t("export"));
  setText(elements.clearFiltersButton, t("clear"));
  setText(elements.topbarEyebrow, t("eyebrow"));
  setText(elements.loaderText, t("loading"));

  if (elements.searchInput) {
    elements.searchInput.placeholder = t("searchPlaceholder");
  }

  [t("season"), t("family"), t("usage")].forEach((label, index) => {
    setText(elements.filterTitles[index], label);
  });

  if (elements.sortLabel?.firstChild) {
    elements.sortLabel.firstChild.nodeValue = `${t("sort")}\n`;
  }

  if (elements.mobileFilterToggle) {
    const isOpen = elements.sidebar.classList.contains("filters-open");
    elements.mobileFilterToggle.textContent = isOpen ? t("filtersClose") : t("filtersOpen");
  }

  renderSortOptions();
}

function renderSortOptions() {
  const sortOptions = ["bestseller", "name", "brand", "longevity", "projection"];
  elements.sortSelect.replaceChildren(
    ...sortOptions.map((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = t(`sortOptions.${value}`);
      return option;
    })
  );
  elements.sortSelect.value = state.sort;
}

function hideLoadingScreen() {
  const loader = document.querySelector("#loadingScreen");
  if (!loader) return;
  window.setTimeout(() => {
    loader.classList.add("is-hidden");
    window.setTimeout(() => loader.remove(), 520);
  }, 720);
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    resetVisibleCount();
    window.clearTimeout(searchDebounceTimer);
    searchDebounceTimer = window.setTimeout(update, 120);
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    resetVisibleCount();
    update();
  });

  elements.clearFiltersButton.addEventListener("click", () => {
    state.query = "";
    state.season = "Tümü";
    state.family = "Tümü";
    state.audience = "Tümü";
    state.sort = "bestseller";
    elements.searchInput.value = "";
    elements.sortSelect.value = "bestseller";
    resetVisibleCount();
    renderFilters();
    update();
  });

  elements.mobileFilterToggle.addEventListener("click", () => {
    const isOpen = elements.sidebar.classList.toggle("filters-open");
    elements.mobileFilterToggle.setAttribute("aria-expanded", String(isOpen));
    elements.mobileFilterToggle.textContent = isOpen ? t("filtersClose") : t("filtersOpen");
  });

  elements.loadMoreButton.addEventListener("click", () => {
    state.visibleCount += getCardBatchSize();
    renderCards(currentFilteredCatalog);
  });

  elements.importButton.addEventListener("click", () => elements.fileInput.click());
  elements.exportButton.addEventListener("click", exportCatalog);
  elements.topImportButton?.addEventListener("click", () => elements.fileInput.click());
  elements.topExportButton?.addEventListener("click", exportCatalog);
  elements.fileInput.addEventListener("change", importCatalog);
  elements.modalCloseButton?.addEventListener("click", closePerfumeModal);
  elements.detailModal?.addEventListener("click", (event) => {
    if (event.target?.hasAttribute("data-close-modal")) closePerfumeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePerfumeModal();
  });
}

function getCardBatchSize() {
  return window.matchMedia("(max-width: 700px)").matches ? 30 : 120;
}

function resetVisibleCount() {
  state.visibleCount = getCardBatchSize();
}

function renderFilters() {
  renderButtonGroup(elements.seasonFilters, seasonOptions, state.season, (value) => {
    state.season = value;
    resetVisibleCount();
    update();
  });

  renderButtonGroup(elements.familyFilters, familyFilterOptions, state.family, (value) => {
    state.family = value;
    resetVisibleCount();
    update();
  });

  renderButtonGroup(elements.audienceFilters, ["Tümü", ...audienceOptions], state.audience, (value) => {
    state.audience = value;
    resetVisibleCount();
    update();
  });
}

function buildFamilyFilterOptions() {
  return ["Tümü", ...new Set(catalog.map((item) => item.family).filter(Boolean))].sort((a, b) => {
    if (a === "Tümü") return -1;
    if (b === "Tümü") return 1;
    return textCollator.compare(translateTerm(a), translateTerm(b));
  });
}

function renderButtonGroup(container, options, activeValue, onSelect) {
  container.replaceChildren();
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = translateTerm(option);
    button.dataset.filterValue = option;
    button.className = option === activeValue ? "active" : "";
    button.addEventListener("click", () => {
      onSelect(option);
      renderFilters();
      closeMobileFilters();
    });
    container.append(button);
  });
}

function closeMobileFilters() {
  if (!window.matchMedia("(max-width: 860px)").matches) return;
  elements.sidebar.classList.remove("filters-open");
  elements.mobileFilterToggle.setAttribute("aria-expanded", "false");
  elements.mobileFilterToggle.textContent = t("filtersOpen");
}

function update() {
  const filtered = getFilteredCatalog();
  currentFilteredCatalog = filtered;

  if (!filtered.some((item) => item.id === state.selectedId)) {
    state.selectedId = filtered[0]?.id || "";
  }

  elements.catalogMeta.textContent = catalogSummaryText();
  elements.resultTitle.textContent = state.query ? t("resultsFor", { query: state.query }) : t("bestsellers");
  elements.resultCount.textContent = `${filtered.length} ${t("perfume")}`;
  elements.activeFilterLabel.textContent = buildActiveLabel();

  renderStats(filtered);
  renderCards(filtered);
  renderDetail(catalogById.get(state.selectedId) || filtered[0]);
}

function getFilteredCatalog() {
  const query = normalizeSearchText(state.query);
  const hasSeason = !isAllFilter(state.season);
  const hasFamily = !isAllFilter(state.family);
  const hasAudience = !isAllFilter(state.audience);
  const filtered = [];

  for (const item of catalog) {
    if (query && !item.searchIndex.includes(query)) continue;
    if (hasSeason && !item.seasons.includes(state.season)) continue;
    if (hasFamily && item.family !== state.family) continue;
    if (hasAudience && item.audience !== state.audience) continue;
    filtered.push(item);
  }

  if (state.sort === "bestseller") return filtered;
  return filtered.sort(compareForActiveSort);
}

function compareBestseller(a, b) {
  return (a.overallRank || Number.MAX_SAFE_INTEGER) - (b.overallRank || Number.MAX_SAFE_INTEGER);
}

function compareForActiveSort(a, b) {
  if (state.sort === "brand") return textCollator.compare(a.brand, b.brand) || textCollator.compare(a.name, b.name);
  if (state.sort === "longevity") return b.longevity - a.longevity || textCollator.compare(a.name, b.name);
  if (state.sort === "projection") return b.projection - a.projection || textCollator.compare(a.name, b.name);
  return textCollator.compare(a.name, b.name);
}

function buildActiveLabel() {
  const labels = [];
  if (!isAllFilter(state.season)) labels.push(translateTerm(state.season));
  if (!isAllFilter(state.family)) labels.push(translateTerm(state.family));
  if (!isAllFilter(state.audience)) labels.push(translateTerm(state.audience));
  return labels.length ? labels.join(" / ") : t("allCatalog");
}

function renderStats(items) {
  if (!elements.statsGrid) return;

  const stats = [
    { label: t("stats.result"), value: items.length },
    { label: t("stats.men"), value: items.filter((item) => item.audience === "Erkek").length },
    { label: t("stats.women"), value: items.filter((item) => item.audience === "Kadın").length },
    { label: t("stats.top100"), value: items.filter((item) => item.topHundred).length }
  ];

  elements.statsGrid.replaceChildren(
    ...stats.map((stat) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
      return card;
    })
  );
}

function renderCards(items) {
  elements.perfumeGrid.replaceChildren();

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noResults");
    elements.perfumeGrid.append(empty);
    elements.loadMoreButton.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  const visibleItems = items.slice(0, state.visibleCount);

  visibleItems.forEach((item) => {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    node.dataset.id = item.id;
    node.classList.toggle("active", item.id === state.selectedId);
    node.style.setProperty("--bottle-color", item.color);
    node.style.setProperty("--cap-color", item.cap);
    const image = node.querySelector(".bottle-image");
    if (image) {
      image.src = item.bottleImage;
      image.alt = `${item.name} şişe simgesi`;
    }
    node.querySelector(".brand").textContent = item.brand;
    node.querySelector(".name").textContent = item.name;
    node.querySelector(".accords").textContent = translateList(item.accords).slice(0, 4).join(" / ");
    node
      .querySelector(".season-row")
      .replaceChildren(
        createRankTag(item),
        createLongevityTag(item),
        createWeatherTag(item),
        ...item.seasons.slice(0, 2).map(createSeasonTag)
      );
    const rankSlot = node.querySelector(".card-rank");
    const hoursSlot = node.querySelector(".card-hours");
    if (rankSlot) rankSlot.textContent = `Ranking #${item.bestsellerRank || "-"}`;
    if (hoursSlot) hoursSlot.textContent = item.longevityHours || longevityHours(item.longevity);
    node.addEventListener("click", () => {
      elements.perfumeGrid.querySelector(".perfume-card.active")?.classList.remove("active");
      node.classList.add("active");
      state.selectedId = item.id;
      renderDetail(item);
      openPerfumeModal(item);
    });
    fragment.append(node);
  });

  elements.perfumeGrid.append(fragment);
  elements.loadMoreButton.hidden = state.visibleCount >= items.length;
  if (!elements.loadMoreButton.hidden) {
    elements.loadMoreButton.textContent = `${t("loadMore")} (${Math.min(items.length - state.visibleCount, getCardBatchSize())})`;
  }
}

function renderDetail(item) {
  if (!item) {
    elements.detailContent.innerHTML = `<div class="empty-state">${escapeHtml(t("selectDetail"))}</div>`;
    return;
  }

  setDetailVars(elements.detailContent, item);
  elements.detailContent.innerHTML = detailMarkup(item);
}

function setDetailVars(element, item) {
  element?.style.setProperty("--detail-color", item.color);
  element?.style.setProperty("--bottle-color", item.color);
  element?.style.setProperty("--cap-color", item.cap);
}

function openPerfumeModal(item) {
  if (!elements.detailModal || !elements.modalDetailContent || !elements.modalCard) return;
  setDetailVars(elements.modalCard, item);
  setDetailVars(elements.modalDetailContent, item);
  elements.modalDetailContent.innerHTML = detailMarkup(item);
  elements.detailModal.classList.add("is-open");
  elements.detailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.modalCloseButton?.focus?.({ preventScroll: true });
}

function closePerfumeModal() {
  if (!elements.detailModal) return;
  elements.detailModal.classList.remove("is-open");
  elements.detailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function detailMarkup(item) {
  const weather = item.weather || buildWeatherGuide(item);
  const leadAccords = translateList(item.accords).slice(0, 3).join(" / ");
  const popularityRating = Math.max(
    1,
    Math.ceil(((catalogTargetTotal - (item.overallRank || catalogTargetTotal) + 1) / catalogTargetTotal) * 5)
  );

  return `
    <article class="perfume-profile-card">
      <section class="profile-stage">
        <span class="profile-star" aria-hidden="true">☆</span>
        <div class="profile-copy">
          <span class="profile-flag">${escapeHtml(translateTerm(item.audience))}</span>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.brand)}${item.year ? ` · ${escapeHtml(item.year)}` : ""}</p>
          <strong>${escapeHtml(leadAccords || translateTerm(item.family))}</strong>
        </div>
        <div class="profile-bottle-field">
          <span class="detail-bottle perfume-bottle-icon" role="img" aria-label="${escapeHtml(item.name)} şişe simgesi">
            <span class="bottle-cap"></span>
            <span class="bottle-neck"></span>
            <span class="bottle-body"></span>
          </span>
        </div>
        <aside class="profile-scoreboard">
          <div class="profile-rank">
            <strong>${escapeHtml(item.bestsellerRank || "-")}</strong>
            <span>/${catalogTargetPerAudience.toLocaleString("tr-TR")}<br />Ranking</span>
          </div>
          ${profileMetric("Kalicilik", item.longevityHours, item.longevity)}
          ${profileMetric("Yayilim", `${item.projection}/5`, item.projection)}
          ${profileMetric("Populerlik", item.bestsellerScore || "-", popularityRating)}
        </aside>
      </section>

      <div class="profile-facts">
        ${profileFact("Aile", translateTerm(item.family), "Koku karakteri")}
        ${profileFact("Hava", weather.range, weather.label)}
        ${profileFact("Sezon", translateList(item.seasons).slice(0, 2).join(" / "), "Ideal kullanim")}
        ${profileFact("Sira", `#${item.bestsellerRank || "-"}`, tierLabel(item.bestsellerRank || 9999))}
      </div>

      <div class="detail-body profile-detail-grid">
        <section class="detail-section featured-section">
          ${sectionTitle(t("sections.bestseller"), "trophy")}
          <div class="detail-meta">
            <span class="tag bestseller">${escapeHtml(tierLabel(item.bestsellerRank || 9999))}</span>
            <span class="tag">${escapeHtml(t("popularityScore"))} ${escapeHtml(item.bestsellerScore || "-")}</span>
          </div>
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.performance"), "gauge")}
          <div class="rating-grid">
            ${ratingRow(t("ratings.longevity"), item.longevity, `Ortalama ${item.longevityHours}`)}
            ${ratingRow(t("ratings.projection"), item.projection)}
          </div>
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.weather"), "weather")}
          ${weatherBlock(item)}
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.season"), "season")}
          <div class="detail-meta">${item.seasons.map((season) => createSeasonTag(season).outerHTML).join("")}</div>
          <p class="season-text">${escapeHtml(localizedSeasonNote(item))}</p>
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.outfit"), "outfit")}
          ${guideList(item.outfits)}
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.location"), "location")}
          ${guideList(item.occasions)}
        </section>
        <section class="detail-section wide-section">
          ${sectionTitle(t("sections.pyramid"), "pyramid")}
          <div class="notes-grid">
            ${noteRow(t("notes.top"), item.top)}
            ${noteRow(t("notes.heart"), item.heart)}
            ${noteRow(t("notes.base"), item.base)}
          </div>
        </section>
        <section class="detail-section">
          ${sectionTitle(t("sections.accords"), "accord")}
          <div class="detail-meta">${translateList(item.accords).map((accord) => `<span class="tag">${escapeHtml(accord)}</span>`).join("")}</div>
        </section>
      </div>
    </article>
  `;
}

function profileMetric(label, value, score) {
  return `
    <div class="profile-metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <div class="profile-line" style="--value: ${clampRating(score)}"><span></span></div>
    </div>
  `;
}

function profileFact(label, value, meta) {
  return `
    <div class="profile-fact">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value || "-")}</strong>
      <small>${escapeHtml(meta || "")}</small>
    </div>
  `;
}

function sectionTitle(label, icon) {
  return `<h4>${iconSvg(icon)}<span>${escapeHtml(label)}</span></h4>`;
}

function iconSvg(name) {
  const icons = {
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5a3 3 0 0 0 3 3"/><path d="M16 6h3a3 3 0 0 1-3 3"/><path d="M12 12v4"/><path d="M9 18h6"/>',
    season: '<path d="M12 3v3"/><path d="M12 18v3"/><path d="M4.8 4.8 7 7"/><path d="m17 17 2.2 2.2"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m4.8 19.2 2.2-2.2"/><path d="m17 7 2.2-2.2"/><circle cx="12" cy="12" r="4"/>',
    weather: '<path d="M7 17h9a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5 2A3.5 3.5 0 0 0 7 17Z"/><path d="M8 21h8"/><path d="M10 13h4"/>',
    outfit: '<path d="M8 4 5 6.2 7 10l2-1v10h6V9l2 1 2-3.8L16 4l-2 2h-4L8 4Z"/>',
    location: '<path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/>',
    pyramid: '<path d="M12 4 3 20h18L12 4Z"/><path d="M8 13h8"/><path d="M6 17h12"/><path d="M10 9h4"/>',
    accord: '<path d="M6 8h12"/><path d="M6 16h12"/><circle cx="9" cy="8" r="2"/><circle cx="15" cy="16" r="2"/>',
    gauge: '<path d="M4 15a8 8 0 1 1 16 0"/><path d="m12 15 4-5"/><path d="M8 19h8"/>'
  };

  return `<span class="section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${icons[name] || icons.accord}</svg></span>`;
}

function noteRow(title, notes) {
  return `
    <div class="note-row">
      <strong>${title}</strong>
      <span>${escapeHtml(translateList(notes).join(", ") || t("notes.missing"))}</span>
    </div>
  `;
}

function guideList(items) {
  return `<div class="guide-list">${translateList(items)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function weatherBlock(item) {
  const weather = item.weather || buildWeatherGuide(item);
  return `
    <div class="weather-card">
      <span class="weather-icon" aria-hidden="true">${escapeHtml(weather.icon)}</span>
      <div class="weather-copy">
        <strong>${escapeHtml(weather.label)}</strong>
        <span>${escapeHtml(weather.range)}</span>
      </div>
    </div>
  `;
}

function longevityHours(value) {
  const ranges = {
    1: "2-3 saat",
    2: "3-5 saat",
    3: "5-7 saat",
    4: "7-9 saat",
    5: "9-12+ saat"
  };
  return ranges[clampRating(value)] || "5-7 saat";
}

function ratingRow(label, value, meta = "") {
  return `
    <div class="rating-row">
      <span class="rating-label">
        <span>${escapeHtml(label)}</span>
        ${meta ? `<small>${escapeHtml(meta)}</small>` : ""}
      </span>
      <div class="meter" style="--value: ${value}"><span></span></div>
      <strong>${value}/5</strong>
    </div>
  `;
}

function createSeasonTag(season) {
  const span = document.createElement("span");
  span.className = `tag ${seasonClass(season)}`;
  span.textContent = translateTerm(season);
  return span;
}

function createRankTag(item) {
  const span = document.createElement("span");
  span.className = "tag bestseller";
  span.textContent = `#${item.bestsellerRank || "-"} ${translateTerm(item.audience)}`;
  return span;
}

function createLongevityTag(item) {
  const span = document.createElement("span");
  span.className = "tag performance";
  span.textContent = item.longevityHours || longevityHours(item.longevity);
  return span;
}

function createWeatherTag(item) {
  const span = document.createElement("span");
  const weather = item.weather || buildWeatherGuide(item);
  span.className = "tag weather-tag";
  span.textContent = `${weather.icon} ${weather.range}`;
  return span;
}

function seasonClass(season) {
  if (season === "Yaz") return "summer";
  if (season === "Kış") return "winter";
  if (season === "İlkbahar") return "spring";
  if (season === "Sonbahar") return "autumn";
  if (season === "Dört Mevsim") return "all";
  return "";
}

function exportCatalog() {
  const blob = new Blob([JSON.stringify(catalog, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "parfum-atlasi-katalog.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

async function importCatalog(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const text = await file.text();
  const imported = file.name.toLocaleLowerCase("tr-TR").endsWith(".csv") ? parseCsv(text) : JSON.parse(text);
  const incoming = normalizeCatalog(Array.isArray(imported) ? imported : []);
  const existingIds = new Set(catalog.map((item) => item.id));
  const uniqueIncoming = incoming.filter((item) => !existingIds.has(item.id));

  catalog = [...catalog, ...uniqueIncoming].sort(compareBestseller);
  catalogById = new Map(catalog.map((item) => [item.id, item]));
  familyFilterOptions = buildFamilyFilterOptions();
  saveCustomPerfumes(catalog);
  renderFilters();
  resetVisibleCount();
  state.selectedId = uniqueIncoming[0]?.id || state.selectedId;
  update();
  elements.fileInput.value = "";
}

function parseCsv(text) {
  const rows = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(splitCsvLine);

  const [headers = [], ...body] = rows;
  return body.map((row) =>
    headers.reduce((record, header, index) => {
      record[header.trim()] = row[index]?.trim() || "";
      return record;
    }, {})
  );
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current);
  return cells;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
