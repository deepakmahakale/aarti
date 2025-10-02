module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category'
        site.data['categories'].each do |category|
          site.pages << CategoryPage.new(site, site.source, category)
        end
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, category)
      @site = site
      @base = base
      @dir = File.join('category', category['slug'])
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['category'] = category['slug']
      self.data['title'] = category['name']
      self.data['description'] = category['description']
    end
  end
end