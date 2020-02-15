from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/')
def main():
    response = requests.get('https://swapi.co/api/planets').json()
    list_of_planets = response['results']
    return render_template('planets.html', planets=list_of_planets)


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
