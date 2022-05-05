package config

import "fmt"


func ConnectToDB() {
	db_username := getEnvVar("DB_USERNAME")
	db_password := getEnvVar("DB_PASSWORD")
	db_database := getEnvVar("DB_DATABASE")
	db_host := getEnvVar("DB_HOST")
	jwt_secret := getEnvVar("JWT_SECRET")
	jwt_expires_in := getEnvVar("JWT_EXPIRES_IN")

	fmt.Printf("db_username: %s\ndb_password: %s\ndb_database: %s\ndb_host: %s\njwt_secret: %s\njwt_expires_in: %s\n", db_username, db_password, db_database, db_host, jwt_secret, jwt_expires_in)

}
