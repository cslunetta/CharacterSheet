USE [master]

IF db_id('CharacterSheet') IS NULL
	CREATE DATABASE [CharacterSheet]
GO

USE [CharacterSheet]
GO

DROP TABLE IF EXISTS [UserProfile];
GO

CREATE TABLE [UserProfile] (
	[Id] integer PRIMARY KEY IDENTITY,
	[FirebaseUserId] NVARCHAR(28) NOT NULL,
	[DisplayName] nvarchar(50) NOT NULL,
	[FirstName] nvarchar(50) NOT NULL,
	[LastName] nvarchar(50) NOT NULL,
	[Email] nvarchar(555) NOT NULL,
	[CreateDateTime] datetime NOT NULL,
	[ImageLocation] nvarchar(255),

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
