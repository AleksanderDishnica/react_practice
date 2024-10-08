import React from 'react'
import Skills from './Skills'
import Experiences from './Experiences'
import './cv.css'

export default function CV() {
    return (
        <main>
            <section class="right">
                <Experiences />
            </section>

            <section class="left">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="white" fill="white" width="150" height="150">
                    <path fill="#white"
                        d="M96.93 62.042h-.525v-4h.525c2.364 0 4.287-1.882 4.287-4.196V42.492c0-2.313-1.923-4.194-4.287-4.194h-.525c-.249 0-.515.05-.787.149l-1.367-3.759a6.294 6.294 0 0 1 2.154-.391h.525c4.569 0 8.287 3.676 8.287 8.194v11.354c0 4.52-3.718 8.197-8.287 8.197zM111.521 128h-4v-15.534c0-5.749-5.495-10.426-12.25-10.426H32.729c-6.755 0-12.251 4.677-12.251 10.426V128h-4v-15.534c0-7.954 7.29-14.426 16.251-14.426h62.542c8.96 0 16.25 6.472 16.25 14.426V128z" />
                    <path fill="#white"
                        d="M64 93.539c-18.659 0-33.839-14.971-33.839-33.372V35.072h4v25.095c0 16.196 13.386 29.372 29.839 29.372 16.454 0 29.84-13.176 29.84-29.372V34.003h4v26.164c0 18.401-15.181 33.372-33.84 33.372z" />
                    <path fill="#white"
                        d="M33.876 62.702H21.843V19.808c0-7.304 6.018-13.246 13.414-13.246h4.031C42.447 2.434 47.355 0 52.629 0h55.555v13.871c0 9.104-7.504 16.511-16.728 16.511H39.91c-3.327 0-6.034 2.654-6.034 5.916v26.404zm-8.033-4h4.033V36.298c0-5.468 4.501-9.916 10.034-9.916h51.546c7.018 0 12.728-5.612 12.728-12.511V4H52.629c-4.301 0-8.282 2.12-10.649 5.671l-.594.891h-6.129c-5.191 0-9.414 4.148-9.414 9.246v38.894z" />
                    <path fill="#white"
                        d="m34.16 62.192-2.204-.225c-3.629-.371-10.111-3.402-10.111-8.121V42.492c0-4.716 6.482-7.747 10.111-8.119l2.204-.226v28.045zm-4-23.294c-2.195.815-4.315 2.346-4.315 3.594v11.354c0 1.249 2.121 2.781 4.315 3.596V38.898zM70.422 101.754h4v14.518h-4zM59.711 101.754h4v14.518h-4z" />
                </svg>
                <Skills />
            </section>
            <section class="clear">

            </section>
        </main>
    )
}