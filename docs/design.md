# Design System

## 1. Design Principles

### Clear
Interfaces should be easy to understand.

### Minimal
Avoid unnecessary UI elements.

### Consistent
Same components should behave consistently.

### Accessible
Interfaces should be usable with keyboard and screen readers.

### Responsive
Dashboard and widget must work across screen sizes.

---

## 2. Product Areas

### Business Dashboard

Main sections:

- Overview
- Agents
- Knowledge
- Conversations
- Customers
- Tools
- Widget
- Usage
- Settings

### Admin Dashboard

- Overview
- Businesses
- Users
- Agents
- Usage
- System status

### Chat Widget

- Header
- Conversation area
- Message composer
- Suggested prompts
- Tool/action status
- Approval UI

---

## 3. Visual Language

### Style & Aesthetics
- **Vibe**: Modern, developer-focused, technical minimalism (inspired by Linear / Vercel grid aesthetics)
- **Layout**: Hairline grid structure with 1px borders (`border-gray-300`)
- **Effects**: Glassmorphism (`backdrop-blur-md`), subtle radial glow effects, audio waveform visualization

### Color Palette

#### Canvas & Layout
- **Background**: `bg-white` (`#FFFFFF`) *(Explored alternatives: `#F5F5F7` soft neutral, `#EBEBEB` industrial gray)*
- **Navbar**: `bg-white/95 backdrop-blur-md` (Sticky header with blur)
- **Grid & Borders**: `border-gray-300` (`#D1D5DB`) — 1px hairline divider lines across sections and columns

#### Typography Colors
- **Primary Text**: `text-black` (`#000000`) — high contrast headings and titles
- **Secondary / Subtitle Text**: `text-gray-700` (`#374151`) — navigation links and menu text
- **Muted / Caption Text**: `text-gray-500` (`#6B7280`) — descriptions, mono subtitles, and labels

#### Buttons & CTAs
- **Primary Button**: `bg-black` (`#000000`) | Text: `text-white` | Hover: `hover:bg-gray-800` | Border radius: `rounded-sm`
- **Secondary Button**: `bg-white` (`#FFFFFF`) | Text: `text-black` | Border: `border-gray-300` | Hover: `hover:border-black`

#### Brand & Accent Colors
- **Primary Accent (Electric Cyan)**: `#37C6E5`
  - Text selection: `selection:bg-[#37C6E5] selection:text-black`
  - Stats highlight (e.g. 99% decrease in hold time)
  - Logo accent dot
  - Bottom ambient radial glow (`from-[#37C6E5]/20 via-[#37C6E5]/5 to-transparent blur-3xl`)
- **Success Accent**: `#27C93F` (Used in workflow status & checkmark badges)
- **Hero Visual Gradient**: Deep teal gradient `from-[#062432] via-[#0D87A8] to-[#0a4a60]` with noise overlay texture

---

### Typography

- **Heading Font**: **Geist Sans** (`var(--font-geist-sans)`)
  - Applied to `h1`, `h2`, `h3`, `h4`, `h5`
  - Weights: `font-medium` (500) to `font-bold` (700)
  - Letter spacing: `tracking-tight` (-0.025em to -0.05em)
  - Line height: `leading-[1.1]` for hero headlines
- **Body & Technical Font**: **Geist Mono** (`var(--font-geist-mono)`)
  - Applied to `p`, `a`, `button`, and badges/labels (`font-mono`)
  - Style: Clean developer/code aesthetic for subtitles, stat labels, and descriptions
- **Navigation & UI Labels**: `font-sans font-semibold text-sm`

---

## 4. Components

### Buttons

Variants:

- Primary
- Secondary
- Destructive
- Ghost

### Forms

- Input
- Select
- Checkbox
- Radio
- Textarea
- Validation messages

### Dashboard

- Sidebar
- Header
- Cards
- Tables
- Charts
- Empty states
- Loading states
- Error states

### AI UI

- User message
- Assistant message
- Streaming message
- Tool execution
- Approval request
- Error message
- Source citation

---

## 5. Chat Widget

The widget must support:

- Light theme
- Dark theme
- Custom branding
- Custom accent color
- Agent name
- Avatar
- Welcome message
- Suggested prompts
- Mobile responsive layout

---

## 6. UX Rules

- Every async operation needs a loading state.
- Every failure needs an error state.
- Destructive actions require confirmation.
- Long-running operations show progress.
- Empty states explain what the user should do next.
- AI actions must clearly communicate when approval is required.