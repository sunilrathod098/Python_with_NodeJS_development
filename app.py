from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("")
db = client['tack_management']


@app.route('/analyze_tacks', methods=['POST'])
def analyze_tacks():
    data = request.json
    user_id = data.get('userId')
    tasks = list(db.tasks.find({"userId": user_id}))
    
    #perform analysis
    analysis = {"total_task": len(tasks), "completed": sum(1 for task in tasks if task['completed'])}
    return jsonify({"status": "success", "analysis": analysis})
    
    
if __name__ == '__main__':
    app.run(debug=True, port=6000)
