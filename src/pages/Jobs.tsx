import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Calendar } from "lucide-react";

export function JobPage() {
    return (
        <div className="container mx-auto py-24">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Join Our Family</h1>
                <p className="text-lg text-muted-foreground">
                    We're hiring passionate and innovative individuals to help us shape the future of AI. <br />
                    Check out our open positions below!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Job Card 1 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-semibold">Software Engineer</h3>
                        </div>
                        <p className="text-muted-foreground">
                            We're looking for a Software Engineer with experience in AI technologies. Join us and help build innovative AI solutions!
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>Engineering Team</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span>Contract</span>
                        </div>
                        {/* <a href="/apply/software-engineer" className="text-primary font-semibold mt-4 inline-block">
                            Apply Now
                        </a> */}
                        <p className="line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>

                {/* Job Card 2 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-semibold">Product Manager</h3>
                        </div>
                        <p className="text-muted-foreground">
                            We need a Product Manager to lead our AI product development. If you have a strong understanding of AI and product strategy, we'd love to meet you.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>Product Team</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span>Part-Time</span>
                        </div>
                        <p className="line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>

                {/* Job Card 3 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-semibold">Marketing Specialist</h3>
                        </div>
                        <p className="text-muted-foreground">
                            We’re looking for a Marketing Specialist to drive growth for AIVOLVE. Help us take our innovative AI solutions to the next level.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>Marketing Team</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span>Volunteer</span>
                        </div>
                        <p className="line-through">
                            Apply Now
                        </p>
                    </CardContent>
                </Card>
                {/* Job Card 4 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-semibold">Platform Architect</h3>
                        </div>
                        <p className="text-muted-foreground">
                        We need a Platform Architect to lead our AI product architecture development. If you have a strong understanding of , we'd love to meet you
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>Architecture & Backend Team</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <span>Volunteer</span>
                        </div>
                        <p className="line-through">
                            Apply Now
                        </p>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
