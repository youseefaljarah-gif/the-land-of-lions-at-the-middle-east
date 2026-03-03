import random
import json

def threat_level():
    risk = random.randint(0, 100)
    level = "منخفض" if risk <= 40 else "متوسط" if risk <= 70 else "مرتفع"
    probability = random.randint(30,80)
    return {"risk": risk, "level": level, "probability": probability}

if name == "__main__":
    data = [threat_level() for _ in range(5)]
    print(json.dumps(data, ensure_ascii=False, indent=4))
