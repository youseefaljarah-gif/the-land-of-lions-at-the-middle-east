from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

NEWS_API_KEY = "ضع هنا مفتاحك من NewsAPI"
URL = "https://newsapi.org/v2/everything?q=إيران OR إسرائيل OR الولايات المتحدة&language=ar&apiKey=" + NEWS_API_KEY

knowledge_base = {
    "ما هو التهديد الحالي؟": "مستوى التهديد الإقليمي يعتمد على الأخبار الحية.",
    "من الفاعلون الرئيسيون؟": "الولايات المتحدة، إسرائيل، إيران، وأطراف إقليمية أخرى.",
    "ما احتمالية مواجهة مفتوحة؟": "الاحتمالية منخفضة حالياً وفق الأخبار."
}

@app.route("/tension")
def tension_api():
    try:
        res = requests.get(URL).json()
        articles = res.get("articles", [])
        tension_score = 0
        for a in articles:
            text = (a.get("title","") + " " + a.get("description",""))
            words = ["ضربة","صراع","هجوم","تصعيد","تهديد"]
            for w in words:
                if w in text:
                    tension_score += 5
        score = min(tension_score, 100)
        level = "مرتفع" if score > 70 else "متوسط" if score > 40 else "منخفض"
        return jsonify({"score": score, "level": level})
    except:
        return jsonify({"score":0, "level":"غير متوفر"})

@app.route("/ask")
def ask():
    q = request.args.get("question", "").strip()
    answer = knowledge_base.get(q, "عذراً، لا يوجد إجابة محددة لهذا السؤال.")
    return jsonify({"answer": answer})

if name == "__main__":
    app.run(debug=True)
