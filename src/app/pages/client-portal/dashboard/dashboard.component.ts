import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">Client Dashboard</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Welcome Card -->
        <div class="col-xl-12">
          <div class="card overflow-hidden">
            <div class="bg-primary-subtle">
              <div class="row">
                <div class="col-7">
                  <div class="text-primary p-3">
                    <h5 class="text-primary">Welcome Back!</h5>
                    <p>Your client portal dashboard</p>
                  </div>
                </div>
                <div class="col-5 align-self-end">
                  <img src="assets/images/profile-img.png" alt="" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Quick Actions -->
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 ms-3">
                  <div>
                    <h5 class="font-size-16 mb-1">Documents</h5>
                    <p class="text-muted mb-2">View and upload documents</p>
                    <a routerLink="/client-portal/documents" class="btn btn-primary btn-sm">
                      <i class="bx bx-file me-1"></i> View Documents
                    </a>
                  </div>
                </div>
                <div class="flex-shrink-0 align-self-center">
                  <div class="avatar-sm rounded-circle bg-primary-subtle">
                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary">
                      <i class="bx bx-file font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 ms-3">
                  <div>
                    <h5 class="font-size-16 mb-1">Intake Forms</h5>
                    <p class="text-muted mb-2">Complete required forms</p>
                    <a routerLink="/client-portal/intake" class="btn btn-success btn-sm me-2">
                      <i class="bx bx-edit me-1"></i> Business Forms
                    </a>
                    <a routerLink="/client-portal/tax-intake" class="btn btn-primary btn-sm">
                      <i class="bx bx-receipt me-1"></i> Tax Intake
                    </a>
                  </div>
                </div>
                <div class="flex-shrink-0 align-self-center">
                  <div class="avatar-sm rounded-circle bg-success-subtle">
                    <span class="avatar-title rounded-circle bg-success-subtle text-success">
                      <i class="bx bx-edit font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 ms-3">
                  <div>
                    <h5 class="font-size-16 mb-1">Chat</h5>
                    <p class="text-muted mb-2">Message your accountant</p>
                    <a routerLink="/client-portal/chat" class="btn btn-info btn-sm">
                      <i class="bx bx-chat me-1"></i> Start Chat
                    </a>
                  </div>
                </div>
                <div class="flex-shrink-0 align-self-center">
                  <div class="avatar-sm rounded-circle bg-info-subtle">
                    <span class="avatar-title rounded-circle bg-info-subtle text-info">
                      <i class="bx bx-chat font-size-24"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Recent Activity -->
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Recent Activity</h4>
              <div class="table-responsive">
                <table class="table table-nowrap align-middle mb-0">
                  <tbody>
                    <tr>
                      <td style="width: 50px;">
                        <div class="avatar-sm">
                          <span class="avatar-title rounded-circle bg-primary-subtle text-primary">
                            <i class="bx bx-file"></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 class="font-size-14 mb-1">Document uploaded</h5>
                        <p class="text-muted mb-0">Tax documents for 2024</p>
                      </td>
                      <td>
                        <div class="text-end">
                          <span class="text-muted font-size-12">2 hours ago</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="avatar-sm">
                          <span class="avatar-title rounded-circle bg-success-subtle text-success">
                            <i class="bx bx-edit"></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 class="font-size-14 mb-1">Form completed</h5>
                        <p class="text-muted mb-0">Client intake form submitted</p>
                      </td>
                      <td>
                        <div class="text-end">
                          <span class="text-muted font-size-12">1 day ago</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="avatar-sm">
                          <span class="avatar-title rounded-circle bg-info-subtle text-info">
                            <i class="bx bx-chat"></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 class="font-size-14 mb-1">Message received</h5>
                        <p class="text-muted mb-0">New message from your accountant</p>
                      </td>
                      <td>
                        <div class="text-end">
                          <span class="text-muted font-size-12">3 days ago</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Status -->
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Account Status</h4>
              <div class="text-center">
                <div class="mb-4">
                  <i class="bx bx-check-circle text-success display-4"></i>
                </div>
                <h5>Account Active</h5>
                <p class="text-muted">Your account is in good standing</p>
                
                <div class="mt-4">
                  <div class="d-flex justify-content-between mb-2">
                    <span>Profile Completion</span>
                    <span>85%</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .avatar-sm {
      height: 2rem;
      width: 2rem;
    }
    
    .avatar-title {
      align-items: center;
      background-color: #556ee6;
      color: #fff;
      display: flex;
      font-weight: 500;
      height: 100%;
      justify-content: center;
      width: 100%;
    }
    
    .bg-primary-subtle {
      background-color: rgba(85, 110, 230, 0.1) !important;
    }
    
    .bg-success-subtle {
      background-color: rgba(52, 195, 143, 0.1) !important;
    }
    
    .bg-info-subtle {
      background-color: rgba(80, 165, 241, 0.1) !important;
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ClientDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
