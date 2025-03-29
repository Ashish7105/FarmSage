
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Cloud, CloudRain, Sun, Wind, Thermometer } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    temperature: number;
    condition: string;
  }>;
}

// Mock weather data for demonstration purposes
const mockWeatherData: WeatherData = {
  location: "New Delhi, India",
  temperature: 28,
  condition: "Sunny",
  humidity: 45,
  windSpeed: 8,
  forecast: [
    { day: "Tomorrow", temperature: 29, condition: "Mostly Sunny" },
    { day: "Wednesday", temperature: 31, condition: "Clear" },
    { day: "Thursday", temperature: 30, condition: "Partly Cloudy" },
    { day: "Friday", temperature: 27, condition: "Light Rain" },
    { day: "Saturday", temperature: 26, condition: "Scattered Showers" },
  ],
};

const WeatherForecast: React.FC = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchWeather = () => {
    if (!location) {
      toast({
        title: "Location required",
        description: "Please enter a location to check the weather forecast.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // In a real app, you would connect to a weather API here
    // For this demo, we'll use the mock data after a fake loading delay
    setTimeout(() => {
      setWeatherData({
        ...mockWeatherData,
        location: location,
      });
      setIsLoading(false);
    }, 1000);
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
      case "mostly sunny":
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case "cloudy":
      case "partly cloudy":
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case "rain":
      case "light rain":
      case "scattered showers":
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Cloud className="h-8 w-8 text-gray-400" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-green-800">Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="pl-10"
              />
            </div>
            <Button 
              onClick={fetchWeather} 
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? "Loading..." : "Check Weather"}
            </Button>
          </div>

          {weatherData && (
            <div className="mt-4 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-4">
                  {getWeatherIcon(weatherData.condition)}
                  <div>
                    <h3 className="text-xl font-semibold">{weatherData.location}</h3>
                    <p className="text-gray-600">{weatherData.condition}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-red-500" />
                    <span className="text-lg font-semibold">{weatherData.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-blue-500" />
                    <span>{weatherData.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-5 w-5 text-blue-400" />
                    <span>{weatherData.humidity}%</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-green-800">5-Day Forecast</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {weatherData.forecast.map((day, index) => (
                  <Card key={index} className="bg-white border-green-100">
                    <CardContent className="p-4 flex flex-col items-center">
                      <p className="font-medium">{day.day}</p>
                      {getWeatherIcon(day.condition)}
                      <p className="mt-2 text-lg font-semibold">{day.temperature}°C</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Farming Tips Based on Forecast</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>The next few days are ideal for harvesting due to sunny conditions.</li>
                  <li>Consider light irrigation on Thursday due to rising temperatures.</li>
                  <li>Prepare for rainfall on Friday - not suitable for pesticide application.</li>
                  <li>Good ventilation recommended for storage facilities during humid conditions.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
