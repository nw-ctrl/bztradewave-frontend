import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wheat, Cpu, Shirt, TrendingUp, Star, ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of products across agriculture, electronics, and fashion sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Wheat className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Agriculture</CardTitle>
                <CardDescription>Premium agricultural products from Australia</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
                <p className="text-sm text-muted-foreground">
                  Detailed product catalog and specifications will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Cpu className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Electronics</CardTitle>
                <CardDescription>Cutting-edge technology solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
                <p className="text-sm text-muted-foreground">
                  Detailed product catalog and specifications will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Shirt className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Fashion</CardTitle>
                <CardDescription>Sustainable fashion and textiles</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
                <p className="text-sm text-muted-foreground">
                  Detailed product catalog and specifications will be available soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

