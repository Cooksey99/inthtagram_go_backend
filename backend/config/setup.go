package config

import (
	// allows us to connect to DB
	// "database/sql"
	"database/sql"
	"fmt"

	// driver for postgres
	// the "_" lets Go know we won't be referencing this at any point
	_ "github.com/lib/pq"
)

func ConnectToDB() {
	db_username := getEnvVar("DB_USERNAME")
	db_password := getEnvVar("DB_PASSWORD")
	db_database := getEnvVar("DB_DATABASE")
	db_host := getEnvVar("DB_HOST")
	// jwt_secret := getEnvVar("JWT_SECRET")
	// jwt_expires_in := getEnvVar("JWT_EXPIRES_IN")
	port := (getEnvVar("PORT"))
	if len(port) <= 0{
		port = "5000"
	}

	// fmt.Printf("db_username: %s\ndb_password: %s\ndb_database: %s\ndb_host: %s\njwt_secret: %s\njwt_expires_in: %s\n", db_username, db_password, db_database, db_host, jwt_secret, jwt_expires_in)

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
    "password=%s dbname=%s sslmode=disable",
    db_host, port, db_username, db_password, db_database)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	// defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
}
