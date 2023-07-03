<style>
  body {
    margin: 0;
    padding: 0;
  }

  
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .container:first-child {
    background-image: url(https://i.yapx.ru/WNfLL.jpg);
    background-size: cover;
  }

  .frame {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid white; /* Add this line to set the border */
}



  .frame-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .frame:not(.portfolio) {
    cursor: pointer;
  }

  .content {
    pointer-events: none;
  }

  .container:nth-child(2) {
    display: flex;
    flex-direction: row;
  }

  .photo {
    flex: 1;
    background-image: url(https://i.ibb.co/XkMBjy9/golden-monstera-leaves-background-design-resource-croped.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
  }

  .text {
    flex: 1;
    background-color: black;
    padding: 20px;
    color: white;
  }

  #container {
    display: flex;
    height: 100vh;
    background-color: black;
  }

  .special-frame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    cursor: pointer;
  }

  .special-frame:nth-child(1),
  .special-frame:nth-child(2),
  .special-frame:nth-child(3) {
    border: 2px solid #ffdc33;
    width: calc(33.33% - 30px);
    height: calc(100% - 100px);
    margin-right: 30px;
  }




  .special-frame:hover {
    background-color: #333;
  }
  @media only screen and (max-width: 767px) {
    .container {
      flex-direction: column;
    }

    .photo {
      display: none; /* Hide the photo on mobile screens */
    }

    .text {
      padding-top: 20px; /* Add some spacing between the text and the top */
    }

    /* Adjust font size for the first container */
    .container:first-child .frame-content h1 {
      font-size: 3em;
    }

    /* Arrange frames vertically in the third container */
    #container {
      flex-direction: column;
    }

    .special-frame {
      width: 100%;
      margin-bottom: 30px;
    }

    .special-frame:nth-child(1),
    .special-frame:nth-child(2),
    .special-frame:nth-child(3) {
      margin-right: 0;
    }
  }
</style>

<body>
  <div class="container">
    <div class="frame"></div>
    <div class="frame-content">
      <div class="content">
        <h1 style="color: white; font-size: 6em; text-align: center;">Portfolio</h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="photo"></div>
    <div class="text">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>About me</h1>
      <p style="font-size: 20px;">From an early age, my natural talent for languages became evident. Learning them came effortlessly and naturally, and when I sought to earn my first money in my youth, it was clear which path to choose. For a solid four years, I dedicated myself to freelancing, initially as a translator in languages like English, German, and Japanese. As time went on, I expanded my skills to include SEO copywriting.</p>
      <p style="font-size: 20px;">However, I eventually decided to step away from freelance exchanges, recognizing that it was an arena primarily for beginners, where success often hinged on delegating work to lower-paid individuals. I realized that I had outgrown the phase of needing just a little money for student entertainment; I had transformed into someone who desired personal and professional growth.</p>
      <p style="font-size: 20px;">As time went on, I realized that I wanted more than just financial rewards. I wanted to give back to society and contribute to the well-being of others. One significant step I took was joining an organization dedicated to helping individuals with serious mental and physical health challenges. Although it started as a small group of passionate individuals unsure of their direction, I contributed by translating essential resources, including an entire book that continues to be a valuable asset today.</p>
    </div>
  </div>

  <div id="container">
    <div class="special-frame" onclick="window.location.href = 'Plants.html'">
      <img src="https://i.postimg.cc/c455JF26/1656-oooo-plus-1.png" alt="Image 1">
      <div>
      <p style="margin: 30px; font-size: 30px;">Are you a beginner to floriculture and having trouble growing even the simplest flowers? Learn the basics of how to water, where to put your plants for enough sun, and what to do if the leaves turn yellow with this quick guide to floriculture for beginners.</p>
      </div>
    </div>
    <div class="special-frame" onclick="window.location.href = 'javascript_page2.html'">
      <img src="https://i.postimg.cc/qvYkGV8x/222222222-round.png" alt="Image 2">
      <div>
      <p style="margin: 30px; font-size: 30px;">Картинки так, для теста, на самом деле там будут иллюстрации к статьям. А вот тут, где ты читаешь, будет краткое описание статей, этакое краткое содержание. Вообще это портфолио СЕО копирайтера, которое я хочу показывать ибо выглядит круче чем просто файлы</p>
      </div>
    </div>
    <div class="special-frame" onclick="window.location.href = 'javascript_page3.html'">
      <img src="https://i.postimg.cc/SQrkvz6s/33333-round.png" alt="Image 3">
      <div>
      <p style="margin: 30px; font-size: 30px;">Картинки так, для теста, на самом деле там будут иллюстрации к статьям. А вот тут, где ты читаешь, будет краткое описание статей, этакое краткое содержание. Вообще это портфолио СЕО копирайтера, которое я хочу показывать ибо выглядит круче чем просто файлы</p>
      </div>
    </div>
  </div>
</body>
