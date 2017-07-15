// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/dev-404-page.js")),
  "page-component---src-templates-template-blog-post-js": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/src/templates/template-blog-post.js")),
  "page-component---src-templates-template-tag-page-js": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/src/templates/template-tag-page.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/src/pages/index.js")),
  "page-component---src-pages-tags-js": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/src/pages/tags.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/dev-404-page.json"),
  "hello-world-kitchen-sink.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/hello-world-kitchen-sink.json"),
  "responsive-images-and-iframes.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/responsive-images-and-iframes.json"),
  "copy-linked-files-intercepting-local-links.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/copy-linked-files-intercepting-local-links.json"),
  "code-and-syntax-highlighting.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/code-and-syntax-highlighting.json"),
  "tags-remark.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-remark.json"),
  "tags-kitchen-sink.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-kitchen-sink.json"),
  "tags-images.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-images.json"),
  "tags-videos.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-videos.json"),
  "tags-i-frames.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-i-frames.json"),
  "tags-linked-files.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-linked-files.json"),
  "tags-local-links.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-local-links.json"),
  "tags-code-highlighting.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags-code-highlighting.json"),
  "index.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/index.json"),
  "tags.json": require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/.cache/json/tags.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/oriol/Documents/Programming/Websites/gatsby1/oriolcodes/src/layouts/index"))
}