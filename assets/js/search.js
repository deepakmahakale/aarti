// Optimized search functionality with debouncing
(function() {
    'use strict';

    let searchIndex = [];
    let searchInput, searchResults;

    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize search
    function initSearch() {
        searchInput = document.getElementById('searchInput');
        searchResults = document.getElementById('searchResults');

        if (!searchInput || !searchResults) return;

        // Build search index
        buildSearchIndex();

        // Add event listeners
        searchInput.addEventListener('input', debounce(handleSearch, 300));

        // Hide results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // Build search index from page data
    function buildSearchIndex() {
        // This would be populated by Jekyll during build
        const aartisData = window.aartisData || [];
        searchIndex = aartisData.map(aarti => ({
            ...aarti,
            searchText: `${aarti.title} ${aarti.translit} ${aarti.tags.join(' ')}`.toLowerCase()
        }));
    }

    // Handle search input
    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        const results = searchIndex.filter(aarti =>
            aarti.searchText.includes(query)
        ).slice(0, 8); // Limit results for performance

        displayResults(results, query);
    }

    // Display search results
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="p-4 text-gray-500 text-center marathi-text">
                    "${query}" साठी कोणतीही आरती सापडली नाही
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(aarti => `
                <div class="p-4 border-b border-gray-100 last:border-b-0">
                    <a href="${aarti.url}" class="block hover:text-orange-600 transition">
                        <div class="font-bold marathi-text">${highlightText(aarti.title, query)}</div>
                        <div class="text-sm text-gray-600">${highlightText(aarti.translit, query)}</div>
                        <div class="text-xs text-gray-500 mt-1">${aarti.category}</div>
                    </a>
                </div>
            `).join('');
        }

        searchResults.classList.remove('hidden');
    }

    // Highlight matching text
    function highlightText(text, query) {
        if (!query) return text;

        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }

    // Lazy load non-critical content
    function loadNonCriticalContent() {
        const nonCriticalElements = document.querySelectorAll('.non-critical');
        nonCriticalElements.forEach(element => {
            element.classList.add('loaded');
        });
    }

    // Load non-critical content after page load
    window.addEventListener('load', function() {
        setTimeout(loadNonCriticalContent, 100);
    });

})();