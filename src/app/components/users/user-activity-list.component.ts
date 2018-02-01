// Angular core
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, ParamMap }                      from '@angular/router';
import { Location }                                      from '@angular/common';

// Sipi custom
import { AgoPipe }     from '../../pipes/ago.pipe';
import { User }        from './user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-activity-list',
  templateUrl: './user-activity-list.component.html'
})

export class UserActivityListComponent implements OnInit {


  p;
  notifications;

  @Input() user: User; // setting the input for user, uses User class

  constructor(
    private userService: UserService
  ) { }

  /**
   * On Init
   */
  ngOnInit(): void {

    this.getNotifications(809);

  }

  /**
   * Get notifications
   */
  getNotifications(userId) {

    this.userService
    .getUserNotifications(userId)
    .subscribe(
      data => {
        this.notifications = data;
      }
    );
  }

  /**
   * Marks notifications as read
   */
  markAsRead() {

  }

}