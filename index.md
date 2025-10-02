---
layout: default
title: आरती संग्रह | Aarti Sangrah - Marathi Devotional Songs
meta_description: आरती संग्रह - Complete collection of Marathi Aartis with lyrics, audio and video. गणपती, देवी, विठोबा आणि इतर देवतांच्या आरत्या
keywords: aarti, marathi aarti, devotional songs, ganpati aarti, devi aarti, vitthal aarti, मराठी आरती
lang: mr
---

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
    <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 marathi-text leading-tight">
            भक्तिमय आरतींचा संग्रह
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 mb-10">
            Complete collection of Marathi Aartis with lyrics, audio, and video
        </p>

        <div class="relative max-w-2xl mx-auto">
            <input
                type="text"
                id="searchInput"
                placeholder="आरती शोधा... (Search Aarti)"
                class="w-full px-6 py-4 pr-32 rounded-2xl border-2 border-gray-200 focus:border-orange-400 focus:outline-none text-base sm:text-lg shadow-lg bg-white marathi-text"
            >
            <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition font-medium marathi-text">
                शोधा
            </button>
        </div>
        <div id="searchResults" class="mt-4 text-left bg-white rounded-2xl shadow-lg hidden"></div>
    </div>
</section>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex items-center justify-between mb-8">
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 marathi-text">लोकप्रिय आरत्या</h3>
        <a href="#categories" class="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">सर्व पहा →</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {% assign featured_aartis = site.aartis | where: "featured", true | limit: 3 %}
        {% for aarti in featured_aartis %}
            {% assign aarti_category = site.data.categories | where: "slug", aarti.category | first %}
            <a href="{{ aarti.url | relative_url }}" class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden">
                <div class="bg-gradient-to-br {{ aarti_category.color }} p-8 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div class="relative">
                        <div class="text-5xl mb-3">{{ aarti_category.icon }}</div>
                        <h4 class="text-2xl font-bold mb-1 marathi-text">{{ aarti.title_marathi }}</h4>
                        <p class="text-white/80 text-sm">{{ aarti.title_translit }}</p>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-600 mb-3 marathi-text">{{ aarti_category.name }}</p>
                    <div class="flex gap-2 flex-wrap">
                        {% for tag in aarti.tags limit: 2 %}
                            <span class="bg-orange-50 text-orange-700 text-xs px-3 py-1.5 rounded-full font-medium">{{ tag }}</span>
                        {% endfor %}
                    </div>
                </div>
            </a>
        {% endfor %}
    </div>
</section>

<section id="categories" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center marathi-text">श्रेणी</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {% for category in site.data.categories %}
            <a href="/category/{{ category.slug }}/" class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center group">
                <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">{{ category.icon }}</div>
                <h4 class="font-bold text-base sm:text-lg text-gray-900 marathi-text">{{ category.name }}</h4>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">{{ category.description }}</p>
                {% assign category_count = site.aartis | where: "category", category.slug | size %}
                <p class="text-xs text-orange-600 mt-2 font-medium">{{ category_count }} आरत्या</p>
            </a>
        {% endfor %}
    </div>
</section>

<section id="about" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div class="text-center max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold text-gray-900 mb-6 marathi-text">आमच्याबद्दल</h3>
            <p class="text-lg text-gray-600 mb-6 marathi-text leading-relaxed">
                आरती संग्रह हे मराठी भक्तिगीतांचे संपूर्ण संकलन आहे. येथे तुम्हाला विविध देवदेवतांच्या आरत्या, त्यांचे अर्थ,
                ऑडिओ आणि व्हिडिओ सापडतील. आमचे उद्दिष्ट भक्तिसंगीताचा प्रसार करणे आणि नवीन पिढीला आमची सांस्कृतिक वारसा
                जपण्यास मदत करणे आहे.
            </p>
            <p class="text-gray-600">
                Complete collection of Marathi devotional Aartis with lyrics, meanings, audio, and video.
                Our mission is to preserve and share the rich heritage of Marathi devotional music.
            </p>
        </div>
    </div>
</section>

<script>
// Simple search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Sample search data - in a real Jekyll site, this would be generated
    const aartis = [
        {% for aarti in site.aartis %}
        {
            title: "{{ aarti.title_marathi }}",
            translit: "{{ aarti.title_translit }}",
            url: "{{ aarti.url | relative_url }}",
            category: "{{ aarti.category }}"
        }{% unless forloop.last %},{% endunless %}
        {% endfor %}
    ];

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        if (query.length > 1) {
            const results = aartis.filter(aarti =>
                aarti.title.toLowerCase().includes(query) ||
                aarti.translit.toLowerCase().includes(query)
            );

            if (results.length > 0) {
                searchResults.innerHTML = results.map(aarti => `
                    <div class="p-4 border-b border-gray-100 last:border-b-0">
                        <a href="${aarti.url}" class="block hover:text-orange-600 transition">
                            <div class="font-bold marathi-text">${aarti.title}</div>
                            <div class="text-sm text-gray-600">${aarti.translit}</div>
                        </a>
                    </div>
                `).join('');
                searchResults.classList.remove('hidden');
            } else {
                searchResults.innerHTML = '<div class="p-4 text-gray-500 text-center marathi-text">कोणतीही आरती सापडली नाही</div>';
                searchResults.classList.remove('hidden');
            }
        } else {
            searchResults.classList.add('hidden');
        }
    });
});
</script>