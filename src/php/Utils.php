<?php

/**
 * Simple utility class with some basic functionality.
 */
class Utils
{

	/**
	 * A variable for storing mix file versions.
	 * @var array $mixFiles
	 */
	private static $mixFiles = [];

	/**
	 * Passes versioned paths for asset files.
	 * Returns the original filename if it isn't found.
	 * 
	 * @param string $filename The desired filename
	 * @return string the versioned filename
	 */
	public static function mix(string $filename): string
	{
		// Check if the filename starts with a /, if not, add it.
		if(substr($filename, 0, 1) !== '/') {
			$filename = '/' . $filename;
		} 

		// Check if we already have a stored version of the filename in our storage, if so, return it.
		if(count(static::$mixFiles) > 0 && isset(static::$mixFiles[$filename])) {
			return static::$mixFiles[$filename];
		}

		// Load the manifest and parse it.
		$manifestFile = file_get_contents('mix-manifest.json');
		static::$mixFiles = json_decode($manifestFile, true);

		// Check if we now have the filename in the array
		if(isset(static::$mixFiles[$filename])) {
			return static::$mixFiles[$filename];
		}

		// If all else fails, return the filename
		return $filename;
	}

	/**
	 * echos the given data as a JSON encoded response.
	 * 
	 * @param mixed $data The response to be echoed
	 * @return void
	 */
	public static function response($data): void
	{
		header('Content-Type: application/json');

		echo json_encode($data);
	}

}
