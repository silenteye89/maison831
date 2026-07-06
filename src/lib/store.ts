"use client";

import type { Reservation } from "./types";

const RESERVATIONS_KEY = "maison831_reservations";

function generateId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `M831-${timestamp}-${random}`;
}

export function getReservations(): Reservation[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(RESERVATIONS_KEY);
  return data ? JSON.parse(data) : [];
}

export function addReservation(
  reservation: Omit<Reservation, "id" | "createdAt" | "status">
): Reservation {
  const newReservation: Reservation = {
    ...reservation,
    id: generateId(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const reservations = getReservations();
  reservations.push(newReservation);
  localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(reservations));

  return newReservation;
}

export function getReservation(id: string): Reservation | undefined {
  return getReservations().find((r) => r.id === id);
}

export function updateReservationStatus(
  id: string,
  status: Reservation["status"]
): void {
  const reservations = getReservations();
  const index = reservations.findIndex((r) => r.id === id);
  if (index !== -1) {
    reservations[index].status = status;
    localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(reservations));
  }
}

export function deleteReservation(id: string): void {
  const reservations = getReservations().filter((r) => r.id !== id);
  localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(reservations));
}

// Admin auth
const ADMIN_PASSWORD = "maison831admin";
const ADMIN_AUTH_KEY = "maison831_admin_auth";

export function adminLogin(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    if (typeof window !== "undefined") {
      localStorage.setItem(ADMIN_AUTH_KEY, "true");
    }
    return true;
  }
  return false;
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function adminLogout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  }
}
