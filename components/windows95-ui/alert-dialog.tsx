"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/windows95-ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", className)}
      {...props}
    />
  )
}

const DragContext = React.createContext<{
  onDragStart: (e: React.MouseEvent) => void
  isDragging: boolean
}>({
  onDragStart: () => {},
  isDragging: false,
})

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  size?: "default" | "sm"
}) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragPreview, setDragPreview] = React.useState<{ x: number; y: number; width: number; height: number } | null>(null)
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 })
  const contentRef = React.useRef<HTMLDivElement>(null)

  const handleDragStart = (e: React.MouseEvent) => {
    if (contentRef.current) {
      setIsDragging(true)
      const rect = contentRef.current.getBoundingClientRect()
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setDragPreview({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      })
    }
  }

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && contentRef.current && dragPreview) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y
        
        // Keep preview within viewport bounds
        const maxX = window.innerWidth - dragPreview.width
        const maxY = window.innerHeight - dragPreview.height
        
        setDragPreview({
          ...dragPreview,
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      }
    }

    const handleMouseUp = () => {
      if (isDragging && dragPreview) {
        // Move the actual window to the preview position
        setPosition({
          x: dragPreview.x,
          y: dragPreview.y,
        })
        setDragPreview(null)
      }
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "move"
      document.body.style.userSelect = "none"
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }
  }, [isDragging, dragStart, dragPreview])

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <DragContext.Provider value={{ onDragStart: handleDragStart, isDragging }}>
        {/* Drag Preview Rectangle */}
        {isDragging && dragPreview && (
          <div
            className="fixed z-50 border-2 border-dashed border-black pointer-events-none"
            style={{
              left: `${dragPreview.x}px`,
              top: `${dragPreview.y}px`,
              width: `${dragPreview.width}px`,
              height: `${dragPreview.height}px`,
              backgroundColor: "transparent",
              zIndex: 60,
            }}
          />
        )}
        <AlertDialogPrimitive.Content
          ref={contentRef}
          data-slot="alert-dialog-content"
          data-size={size}
          data-dragging={isDragging}
          style={{
            ...(position.x !== 0 || position.y !== 0
              ? {
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  transform: "none",
                }
              : {}),
            ...(isDragging ? { opacity: 0 } : {}),
            transition: "none",
          }}
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-[#c0c0c0] win95-border-window p-0.5 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg group/alert-dialog-content fixed z-50 grid w-full outline-none shadow-none",
            position.x === 0 && position.y === 0
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "",
            className
          )}
          {...props}
        />
      </DragContext.Provider>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("grid grid-rows-[auto_1fr] place-items-start gap-2 p-4 text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-row gap-2 p-4 pt-0 justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn("bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8", className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  const { onDragStart } = React.useContext(DragContext)
  
  return (
    <div
      className="win95-title-bar px-2 py-1 mb-2 -mx-4 -mt-4 w-[calc(100%+2rem)] cursor-move select-none"
      onMouseDown={onDragStart}
    >
      <AlertDialogPrimitive.Title
        data-slot="alert-dialog-title"
        className={cn("text-sm font-bold text-white", className)}
        {...props}
      />
    </div>
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-black text-sm leading-relaxed *:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
