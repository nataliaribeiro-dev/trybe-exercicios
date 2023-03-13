window.onload = () => {
    const setBackgroundColor = (color) => {
        let content = document.querySelector(".content")
        content.style.backgroundColor = color
      
        let backgroundColorButtons = document.querySelectorAll("#background-color>button")
        for (let index = 0; index < backgroundColorButtons.length; index += 1) {
          backgroundColorButtons[index].addEventListener("click", (event) => {
            setBackgroundColor(event.target.innerHTML)
          })
        }
        localStorage.setItem("backgroundColor", color)
      }
      
      const setFontColor = (color) => {
        let content = document.querySelector(".content")
        content.style.color = color
      
        let fontColorButtons = document.querySelectorAll("#font-color>button")
        for (let index = 0; index < fontColorButtons.length; index += 1) {
          fontColorButtons[index].addEventListener("click", (event) => {
            setFontColor(event.target.innerHTML)
          })
        }
        localStorage.setItem("fontColor", color)
      }
      
      const setFontSize = (size) => {
        let content = document.querySelector(".content")
        content.style.fontSize = size
      
        let fontSizeButtons = document.querySelectorAll("#font-size>button")
        for (let index = 0; index < fontSizeButtons.length; index += 1) {
          fontSizeButtons[index].addEventListener("click", (event) => {
            setFontSize(event.target.innerHTML)
          })
        }
        localStorage.setItem("fontSize", size)
      }
      
      const setLineHeight = (height) => {
        let content = document.querySelector(".content")
        content.style.lineHeight = height
      
        let lineHeightButtons = document.querySelectorAll("#line-height>button")
        for (let index = 0; index < lineHeightButtons.length; index += 1) {
          lineHeightButtons[index].addEventListener("click", (event) => {
            setLineHeight(event.target.innerHTML)
          })
        }
        localStorage.setItem("lineHeight", height)
      }
      
      const setFontFamily = (family) => {
        let content = document.querySelector(".content")
        content.style.fontFamily = family
      
        let fontFamilyButtons = document.querySelectorAll("#font-family>button")
        for (let index = 0; index < fontFamilyButtons.length; index += 1) {
          fontFamilyButtons[index].addEventListener("click", (event) => {
            setFontFamily(event.target.innerHTML)
          })
        }
        localStorage.setItem("fontFamily", family)
      }
      
      // Invoke each function with the appropriate value from localStorage
      const backgroundColor = localStorage.getItem("backgroundColor")
      if (backgroundColor) setBackgroundColor(backgroundColor)
      
      const fontColor = localStorage.getItem("fontColor")
      if (fontColor) setFontColor(fontColor)
      
      const fontSize = localStorage.getItem("fontSize")
      if (fontSize) setFontSize(fontSize)
      
      const lineHeight = localStorage.getItem("lineHeight")
      if (lineHeight) setLineHeight(lineHeight)
      
      const fontFamily = localStorage.getItem("fontFamily")
      if (fontFamily) setFontFamily(fontFamily)
      
  }