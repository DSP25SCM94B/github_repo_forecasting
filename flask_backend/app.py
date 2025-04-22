from flask import Flask, send_from_directory, jsonify, abort
import os
from flask_cors import CORS  # Optional: For React frontend compatibility

app = Flask(__name__)
CORS(app)  # Enable CORS for React compatibility

# Root where subfolders like 'Visualizations', 'Prophet', etc. are stored
ROOT_OUTPUT_FOLDER = os.path.join(os.getcwd(),"outputs")

@app.route("/")
def home():
    return "Welcome to the Github Repos forecast API!"

@app.route("/list/<subfolder>", methods=["GET"])
def list_files(subfolder):
    """List all HTML files inside a specific subfolder"""
    target_folder = os.path.join(ROOT_OUTPUT_FOLDER, subfolder)
    if not os.path.exists(target_folder):
        return jsonify({"error": "Subfolder not found"}), 404
    
    files = [f for f in os.listdir(target_folder) if f.endswith(".html")]
    return jsonify(files)

@app.route("/get/<subfolder>/<filename>", methods=["GET"])
def get_file(subfolder, filename):
    """Serve a specific HTML file from a given subfolder"""
    target_folder = os.path.join(ROOT_OUTPUT_FOLDER, subfolder)

    # Ensure .html extension is present
    if not filename.endswith(".html"):
        filename += ".html"

    file_path = os.path.join(target_folder, filename)
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404
    
    return send_from_directory(target_folder, filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000,debug=True)
