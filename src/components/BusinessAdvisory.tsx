
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, Users, DollarSign, TrendingUp, 
  BookOpen, FileText, Lightbulb, HelpCircle 
} from "lucide-react";

const BusinessAdvisory: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-green-600" />
          <CardTitle className="text-xl font-bold text-green-800">Business Growth Advisory</CardTitle>
        </div>
        <CardDescription>
          Resources and guidance to help you start and grow your agricultural business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="startup">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="startup">Startup Ideas</TabsTrigger>
            <TabsTrigger value="resources">Growth Resources</TabsTrigger>
            <TabsTrigger value="funding">Funding Options</TabsTrigger>
          </TabsList>
          
          <TabsContent value="startup" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Organic Vegetable Farming",
                  description: "Start a small-scale organic vegetable farm focusing on high-value crops like leafy greens.",
                  investment: "Low-Medium",
                  difficulty: "Medium",
                  icon: <Lightbulb className="h-5 w-5 text-green-600" />
                },
                {
                  title: "Local Food Processing Unit",
                  description: "Process local produce into preserved foods, pickles, or value-added products.",
                  investment: "Medium",
                  difficulty: "Medium-High",
                  icon: <Lightbulb className="h-5 w-5 text-orange-600" />
                },
                {
                  title: "Mushroom Cultivation",
                  description: "Indoor cultivation of specialty mushrooms for local restaurants and markets.",
                  investment: "Low",
                  difficulty: "Low-Medium",
                  icon: <Lightbulb className="h-5 w-5 text-green-600" />
                },
                {
                  title: "Agricultural Consulting",
                  description: "Provide expertise to farmers on improving yields and adopting sustainable practices.",
                  investment: "Low",
                  difficulty: "Medium",
                  icon: <Lightbulb className="h-5 w-5 text-blue-600" />
                },
              ].map((idea, index) => (
                <Card key={index} className="overflow-hidden border-green-100">
                  <div className="bg-green-50 p-4 flex justify-between items-center">
                    <h3 className="font-semibold text-green-800 flex items-center gap-2">
                      {idea.icon}
                      {idea.title}
                    </h3>
                    <Button variant="outline" size="sm" className="h-8">
                      Details
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600 mb-3">{idea.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                        Investment: {idea.investment}
                      </Badge>
                      <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                        Difficulty: {idea.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                Explore More Business Ideas
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="mt-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Business Plan Templates",
                  description: "Download ready-to-use business plan templates for agricultural ventures.",
                  icon: <FileText className="h-10 w-10 text-green-600" />
                },
                {
                  title: "Market Research Guides",
                  description: "Understand your target market and competition with these comprehensive guides.",
                  icon: <TrendingUp className="h-10 w-10 text-blue-600" />
                },
                {
                  title: "Mentor Connect",
                  description: "Get matched with experienced agricultural entrepreneurs for personal guidance.",
                  icon: <Users className="h-10 w-10 text-purple-600" />
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col items-center p-6 text-center border-green-100">
                  <div className="mb-4 p-3 bg-green-50 rounded-full">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" className="mt-auto">Access Resource</Button>
                </Card>
              ))}
            </div>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Learning Library</h3>
                    <p className="text-gray-700 mb-4">
                      Access our comprehensive collection of courses, guides, and webinars on agricultural business management.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Badge className="bg-white text-green-800 border-green-200">25+ Courses</Badge>
                      <Badge className="bg-white text-green-800 border-green-200">50+ Guides</Badge>
                      <Badge className="bg-white text-green-800 border-green-200">Monthly Webinars</Badge>
                      <Badge className="bg-white text-green-800 border-green-200">Expert Q&A</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="funding" className="mt-4 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Looking for funding?</h3>
              </div>
              <p className="text-sm text-gray-700">
                FarmSage connects you with various funding options based on your business type, location, and needs. 
                Explore government schemes, grants, loans, and investors below.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-green-800">Government Schemes & Grants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "PM-KISAN Scheme",
                    description: "Financial assistance of ₹6,000 per year for all landholding farmer families.",
                    deadline: "Ongoing"
                  },
                  {
                    title: "Agricultural Infrastructure Fund",
                    description: "Financing facility for investment in agriculture infrastructure projects.",
                    deadline: "March 2025"
                  },
                  {
                    title: "Micro Irrigation Fund",
                    description: "Support for expanding coverage of micro irrigation systems.",
                    deadline: "December 2024"
                  },
                  {
                    title: "NABARD Rural Business Incubation Centre",
                    description: "Incubation support for rural agriculture-based startups.",
                    deadline: "Applications open quarterly"
                  },
                ].map((scheme, index) => (
                  <Card key={index} className="border-green-100">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-green-800 mb-2">{scheme.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{scheme.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                          Deadline: {scheme.deadline}
                        </Badge>
                        <Button size="sm" variant="outline">Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-green-800 mb-4">Private Investment Options</h3>
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-6 w-6 text-green-600" />
                        <h3 className="font-semibold text-lg">FarmSage Investor Network</h3>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">Connect with Investors</Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      Our network includes angel investors, venture capital firms, and impact investors 
                      interested in sustainable agriculture ventures.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-1">Angel Investors</h4>
                        <p className="text-sm text-gray-600">For early-stage ventures seeking seed funding</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-1">Impact Investors</h4>
                        <p className="text-sm text-gray-600">For projects with social & environmental focus</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-1">Venture Capital</h4>
                        <p className="text-sm text-gray-600">For high-growth potential agritech startups</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BusinessAdvisory;
