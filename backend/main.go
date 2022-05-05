package main

import (
	"backend/config"
	"net/http"

	"github.com/gin-gonic/gin"
	// "backend/routes"
)

func main() {
	config.ConnectToDB()
	r := gin.New()
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World!",
		})
	})
	r.Run()
}
