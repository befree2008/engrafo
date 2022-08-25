import citations from "./citations"
import footnotes from "./footnotes"

function baidu() {
  var _hmt = _hmt || []
  var hm = document.createElement("script")
  hm.src = "https://hm.baidu.com/hm.js?195e150f337a43ba02e8fb5c1c5c0d52"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hm, s)
}
export default function main(el) {
  citations(el)
  footnotes(el)
  baidu()
}
