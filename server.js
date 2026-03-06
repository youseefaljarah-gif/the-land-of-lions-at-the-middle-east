const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// 🟡 بيانات الأخبار
let newsData = [
  { title: "عاجل: مؤتمر سياسي في بغداد" },
  { title: "تطورات عسكرية في سوريا" }
];

// 🟢 API للحصول على الأخبار
app.get('/api/news', (req, res) => {
  res.json(newsData);
});

// 🔵 API لإضافة خبر جديد
app.post('/api/news', (req, res) => {
  const news = req.body;
  newsData.unshift(news);
  res.json({ status: "success" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
