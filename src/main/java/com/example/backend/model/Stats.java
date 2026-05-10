package com.example.backend.model;

public class Stats {

    private int totalUsers;
    private int activeUsers;
    private int inactiveUsers;
    private int newUsers;

    public Stats(int totalUsers, int activeUsers, int inactiveUsers, int newUsers) {
        this.totalUsers = totalUsers;
        this.activeUsers = activeUsers;
        this.inactiveUsers = inactiveUsers;
        this.newUsers = newUsers;
    }

    public int getTotalUsers() { return totalUsers; }
    public int getActiveUsers() { return activeUsers; }
    public int getInactiveUsers() { return inactiveUsers; }
    public int getNewUsers() { return newUsers; }
}