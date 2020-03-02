from flask import Flask, render_template, request, session, redirect, url_for
import requests
import database
app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/')
def main():
    response = requests.get('https://swapi.co/api/planets').json()
    list_of_planets = response['results']
    return render_template('planets.html', planets=list_of_planets)

@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    if request.method == 'POST':
        print(request.form)
        email = request.form['email']
        password = request.form['password1']
        if database.check_password_in_database(email):
            return ('You are already registered')
        else:
            database.insert_user(email, password, 'salt')
    return redirect(url_for('main'))


@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password1']
        print(email)
        password2 = database.check_password_in_database(email)
        if password == password2:
            session['username'] = request.form['username']
        return redirect(url_for('main'))



if __name__ == '__main__':
    app.run(debug=True)
