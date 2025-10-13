import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketing-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketing-homepage.component.html',
  styleUrls: ['./marketing-homepage.component.scss']
})
export class MarketingHomepageComponent implements OnInit {

  features = [
    {
      icon: 'ri-user-settings-line',
      title: 'Client Management',
      description: 'Organize client information, projects, and communications in one centralized dashboard.',
      color: 'primary'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Digital Intake Forms',
      description: 'Streamline client onboarding with customizable digital forms and real-time collaboration.',
      color: 'success'
    },
    {
      icon: 'ri-folder-shield-2-line',
      title: 'Secure Document Management',
      description: 'Store, share, and manage client documents with bank-level security and compliance.',
      color: 'info'
    },
    {
      icon: 'ri-task-line',
      title: 'Project Tracking',
      description: 'Monitor project progress, deadlines, and deliverables with automated workflow management.',
      color: 'warning'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Communication Hub',
      description: 'Built-in messaging system for seamless client-accountant communication and updates.',
      color: 'purple'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Analytics & Reporting',
      description: 'Gain insights into your practice performance with comprehensive reporting and analytics.',
      color: 'danger'
    }
  ];

  benefits = [
    {
      number: '10+',
      unit: 'Hours',
      description: 'Saved per week with automated workflows'
    },
    {
      number: '70%',
      unit: 'Faster',
      description: 'Client onboarding and intake process'
    },
    {
      number: '99.9%',
      unit: 'Uptime',
      description: 'Reliable, secure cloud infrastructure'
    },
    {
      number: '500+',
      unit: 'Firms',
      description: 'Trust Firm Pilot for their practice management'
    }
  ];

  pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for solo practitioners',
      features: [
        'Up to 25 clients',
        'Basic intake forms',
        'Document storage (5GB)',
        'Email support',
        'Basic reporting'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-outline-primary'
    },
    {
      name: 'Professional',
      price: 59,
      period: 'month',
      description: 'Ideal for small to medium firms',
      features: [
        'Up to 100 clients',
        'Advanced intake forms',
        'Document storage (25GB)',
        'Priority support',
        'Advanced reporting',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-primary'
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For large firms and enterprises',
      features: [
        'Unlimited clients',
        'Custom intake forms',
        'Unlimited storage',
        '24/7 phone support',
        'Custom reporting',
        'API access',
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'btn-outline-primary'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CPA, Johnson & Associates',
      content: 'Firm Pilot has transformed our practice. We\'ve cut our client onboarding time in half and our clients love the digital experience.',
      rating: 5,
      avatar: 'assets/images/users/avatar-1.jpg'
    },
    {
      name: 'Michael Chen',
      title: 'Tax Partner, Chen Tax Services',
      content: 'The automation features have saved us countless hours. Our team can now focus on providing value to clients instead of paperwork.',
      rating: 5,
      avatar: 'assets/images/users/avatar-2.jpg'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Managing Partner, Rodriguez CPA',
      content: 'Security and compliance were our top concerns. Firm Pilot exceeded our expectations with their robust security features.',
      rating: 5,
      avatar: 'assets/images/users/avatar-3.jpg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic
  }

  navigateToRegister(): void {
    this.router.navigate(['/account/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/account/login']);
  }

  startFreeTrial(): void {
    this.router.navigate(['/account/register'], { queryParams: { plan: 'trial' } });
  }

  contactSales(): void {
    // Could open a modal or navigate to contact page
    window.open('mailto:sales@firmpilot.com?subject=Enterprise Plan Inquiry', '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
