package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func getEnvVar(key string) string {

	// load env file
	// automatically oads data from .env file
	err := godotenv.Load() // defaults to ".env" as argument
	if err != nil {
		log.Fatal("Error loading the .env file...")
	}

	return os.Getenv(key)
}
