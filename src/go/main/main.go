package main

import (
	"honnef.co/go/js/dom/v2"
)

func main() {
	document := dom.GetWindow().Document()
	body := document.QuerySelector("body")

	helloWorldDiv := document.CreateElement("div")
	helloWorldDiv.SetInnerHTML("Hello World")
	body.AppendChild(helloWorldDiv)
}
