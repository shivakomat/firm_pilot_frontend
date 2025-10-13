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
      number: '2024',
      unit: 'Launch',
      description: 'Fresh platform built for modern consultants'
    }
  ];

  pricingPlans = [
    {
      name: 'Basic',
      price: 19.99,
      period: 'month',
      description: 'Perfect for solo tax consultants',
      features: [
        'Up to 25 clients',
        'Basic intake forms',
        'Document storage (5GB)',
        'Email support',
        'Basic reporting',
        '14-day free trial'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-outline-primary'
    },
    {
      name: 'Professional',
      price: 29.99,
      period: 'month',
      description: 'For established solo practitioners',
      features: [
        'Unlimited clients',
        'Advanced intake forms',
        'Document storage (25GB)',
        'Priority support',
        'Advanced reporting',
        'Built-in chat system',
        'Smart reminders',
        'Custom branding'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-primary'
    }
  ];

  betaLaunch = {
    title: '🚀 Now in Beta Launch!',
    subtitle: 'Be among the first solo tax consultants to experience the future of practice management',
    features: [
      'Early access to all features',
      'Special beta pricing locked in',
      'Direct feedback channel to our team',
      'Priority support during beta period'
    ],
    badge: 'Limited Time Beta Access'
  };

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
