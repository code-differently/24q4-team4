package opp.project.t4.Interfaces;

import opp.project.t4.User;

public interface IAssignable {
  void assignUser(User user);

  void removeUser();

  User getAssignee();
}
