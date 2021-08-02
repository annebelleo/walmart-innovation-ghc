from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "something"  # figure this out l8r


@app.route("/", methods=["GET", "POST"])
def home():
    """
    :return: The web page to be rendered.
    """
    return render_template("home.html")


@app.route("/history/")
def history():
    return render_template("history.html")


if __name__ == "__main__":
    app.run(host='localhost', debug=True)
