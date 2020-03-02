import databasecommon


@databasecommon.connection_handler
def insert_user(cursor, user_name, password, password_salt):
    cursor.execute("""
                    INSERT INTO users (user_name, password, password_salt)
                    VALUES (%(user_name)s, %(password)s, %(password_salt)s);
                    """,
                   {'user_name': user_name,
                    'password': password,
                    'password_salt': password_salt})

@databasecommon.connection_handler
def check_if_user_exists(cursor, user):
    cursor.execute("""
                    SELECT user_name FROM users
                    WHERE user_name == user;
                    """)
    if cursor.fetchall():
        return True
    else:
        return False

@databasecommon.connection_handler
def check_password_in_database(cursor, user):
    cursor.execute("""
                    SELECT password FROM users
                    WHERE user_name = %(user)s;
                    """,
                   {'user': user})
    return cursor.fetchall()