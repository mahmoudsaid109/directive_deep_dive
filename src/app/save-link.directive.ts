import { Directive, ElementRef, inject, input } from '@angular/core';
import Swal from 'sweetalert2';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives:[LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'});
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
  // constructor() {
  //   console.log('SafeLinkDirective is active..!');
  // }
  //   onConfirmLeavePage(event: MouseEvent) {
  //     const wantsToLeave = window.confirm('Are You Want To Leave This Page..?');
  //     if(wantsToLeave){
  //  const address =this.hostElement.nativeElement.href;
  // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam;
  //         return;
  //     }
  //     event.preventDefault();
  //   }
  async onConfirmLeavePage(event: MouseEvent) {
    // Prevent the default action immediately
    event.preventDefault();

    const result = await Swal.fire({
      title: 'Leave Page?',
      text: 'Are you sure you want to leave this page? Any unsaved changes will be lost.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: '<i class="fas fa-sign-out-alt"></i> Leave',
      cancelButtonText: '<i class="fas fa-times"></i> Cancel',
      reverseButtons: true,
      focusCancel: true,
    });

    if (result.isConfirmed) {
      const address = this.hostElement.nativeElement.href;
      // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam;
      window.location.href = address + '?from=' + this.queryParam;
    }
  }
}
