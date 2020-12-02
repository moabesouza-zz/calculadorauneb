
      const mediaText = document.querySelector(".title-text .media");
      const mediaForm = document.querySelector("form.media");
      const mediaBtn = document.querySelector("label.media");
      const provaBtn = document.querySelector("label.prova");
      const provaLink = document.querySelector("form .prova-link a");
      provaBtn.onclick = (()=>{
        mediaForm.style.marginLeft = "-50%";
        mediaText.style.marginLeft = "-50%";
      });
      mediaBtn.onclick = (()=>{
        mediaForm.style.marginLeft = "0%";
        mediaText.style.marginLeft = "0%";
      });
      provaLink.onclick = (()=>{
        provaBtn.click();
        return false;
      });
    